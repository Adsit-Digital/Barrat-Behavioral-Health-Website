/**
 * Cloudflare Pages Function for Chamber of Commerce badge proxy
 * Handles COC badge requests by proxying to coc.codes
 * Adds CORS headers to allow cross-origin access
 */

interface Env {
  ASSETS: Fetcher;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  
  // Handle OPTIONS preflight requests
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  try {
    // Fetch the COC badge image
    const cocUrl = 'https://coc.codes/images/badge/2024063532';
    const response = await fetch(cocUrl);

    if (!response.ok) {
      return new Response('COC Badge not found', { status: 404 });
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
    newResponse.headers.set('Access-Control-Max-Age', '86400');
    
    // Ensure proper content type
    newResponse.headers.set('Content-Type', 'image/png');

    return newResponse;
  } catch (error) {
    console.error('COC Badge proxy error:', error);
    return new Response('Failed to fetch COC badge', { status: 500 });
  }
};
