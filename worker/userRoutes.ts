import { Hono } from "hono";
import { Env } from './core-utils';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    
    // CORS proxy for media assets
    app.get('/media/*', async (c) => {
        const path = c.req.path.replace('/media/', '');
        const mediaUrl = `https://media.inboundwizard.com/${path}`;
        
        try {
            const response = await fetch(mediaUrl);
            
            if (!response.ok) {
                return c.text('Media not found', 404);
            }
            
            // Clone the response and add CORS headers
            const newResponse = new Response(response.body, response);
            newResponse.headers.set('Access-Control-Allow-Origin', '*');
            newResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
            newResponse.headers.set('Access-Control-Allow-Headers', '*');
            
            // Copy content type
            const contentType = response.headers.get('content-type');
            if (contentType) {
                newResponse.headers.set('Content-Type', contentType);
            }
            
            return newResponse;
        } catch (error) {
            console.error('Media proxy error:', error);
            return c.text('Failed to fetch media', 500);
        }
    });
    
    // Handle OPTIONS requests for CORS preflight
    app.options('/media/*', (c) => {
        return c.text('', 204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': '*',
        });
    });
}
