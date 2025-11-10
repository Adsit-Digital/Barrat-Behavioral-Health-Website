export interface Env {
	ASSETS: Fetcher;
}

const MEDIA_PREFIX = "/media/";
const COC_BADGE_PATH = "/coc-badge";
const SPA_ENTRY_POINT = "/index.html";

/**
 * Determine whether a request targets a navigation route that should fall back
 * to the SPA. We only serve the fallback for HTML navigations without a file
 * extension, mirroring the behaviour Cloudflare Pages gives us for free.
 */
const shouldServeSpa = (request: Request, response: Response): boolean => {
	if (!isSafeMethod(request.method)) {
		return false;
	}

	// Only fall back when the asset binding could not resolve the request.
	if (response.status !== 404) {
		return false;
	}

	const acceptHeader = request.headers.get("Accept") ?? "";
	if (!acceptHeader.includes("text/html")) {
		return false;
	}

	const url = new URL(request.url);
	// Skip SPA fallback when the path clearly targets a static asset.
	const hasExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname);

	return !hasExtension;
};

/**
 * Handle the Chamber of Commerce badge proxy. We replicate the existing Pages
 * Function behaviour so the migration to Workers remains transparent.
 */
const handleCocBadge = async (request: Request): Promise<Response> => {
	if (request.method === "OPTIONS") {
		return new Response(null, {
			status: 204,
			headers: corsHeaders(),
		});
	}

	if (!isSafeMethod(request.method)) {
		return new Response("Method Not Allowed", { status: 405 });
	}

	const cocUrl = "https://coc.codes/images/badge/2024063532";
	const upstream = await fetch(new Request(cocUrl, request));

	if (!upstream.ok) {
		return new Response("COC Badge not found", { status: upstream.status });
	}

	const response = new Response(upstream.body, upstream);
	response.headers.set("Content-Type", "image/png");
	copyCorsHeaders(response);
	return response;
};

/**
 * Handle requests under /media/ by proxying to the existing media CDN with
 * permissive CORS headers.
 */
const handleMediaProxy = async (request: Request): Promise<Response> => {
	const url = new URL(request.url);

	if (request.method === "OPTIONS") {
		return new Response(null, {
			status: 204,
			headers: corsHeaders(),
		});
	}

	if (!isSafeMethod(request.method)) {
		return new Response("Method Not Allowed", { status: 405 });
	}

	const mediaPath = url.pathname.replace(MEDIA_PREFIX, "");
	const mediaUrl = `https://media.barratbhandconsulting.com/${mediaPath}`;
	const upstream = await fetch(mediaUrl, request);

	if (!upstream.ok) {
		return new Response("Media not found", { status: upstream.status });
	}

	const response = new Response(upstream.body, upstream);
	copyCorsHeaders(response);
	return response;
};

const corsHeaders = (): HeadersInit => ({
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
	"Access-Control-Allow-Headers": "*",
	"Access-Control-Max-Age": "86400",
});

const copyCorsHeaders = (response: Response) => {
	for (const [key, value] of Object.entries(corsHeaders())) {
		response.headers.set(key, value);
	}
};

const isSafeMethod = (method: string) => method === "GET" || method === "HEAD";

export default {
	/**
	 * Entry point for the Worker. This consolidates static asset serving,
	 * SPA fallback logic, and the two proxy endpoints that previously lived
	 * in Cloudflare Pages Functions.
	 */
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === COC_BADGE_PATH) {
			return handleCocBadge(request);
		}

		if (url.pathname.startsWith(MEDIA_PREFIX)) {
			return handleMediaProxy(request);
		}

		// Try to serve the request from the uploaded static assets first.
		let assetResponse = await env.ASSETS.fetch(request);

		if (shouldServeSpa(request, assetResponse)) {
			const spaRequest = new Request(new URL(SPA_ENTRY_POINT, url.origin), {
				headers: request.headers,
				method: request.method,
			});
			assetResponse = await env.ASSETS.fetch(spaRequest);
		}

		return assetResponse;
	},
};

