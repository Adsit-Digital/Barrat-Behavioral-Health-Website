/**
 * Cloudflare Pages Function for media proxy
 * Handles /media/* routes by proxying requests to media.inboundwizard.com
 * Adds CORS headers to allow cross-origin access
 */

interface Env {
  ASSETS: Fetcher;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const path = context.params.path as string[];
  const mediaPath = Array.isArray(path) ? path.join('/') : path;
  const mediaUrl = `https://media.inboundwizard.com/${mediaPath}`;

  // Handle OPTIONS preflight requests
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }

  try {
    // Fetch from the external media server
    const response = await fetch(mediaUrl);

    if (!response.ok) {
      return new Response('Media not found', { status: 404 });
    }

    // Clone the response and add CORS headers
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    // Add CORS headers
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', '*');

    return newResponse;
  } catch (error) {
    console.error('Media proxy error:', error);
    return new Response('Failed to fetch media', { status: 500 });
  }
};

