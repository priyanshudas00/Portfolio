export async function handler(event, context) {
  const VIEW_COUNT_KEY = 'totalViews';

  // Netlify provides KV storage via environment variable bindings
  const kv = context.env.VIEW_COUNT_KV;

  if (event.httpMethod === 'GET') {
    try {
      const totalViewsStr = await kv.get(VIEW_COUNT_KEY);
      const totalViews = totalViewsStr ? parseInt(totalViewsStr) : 100;
      return {
        statusCode: 200,
        body: JSON.stringify({ totalViews }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: 'Failed to read view count', error: error.message }),
      };
    }
  } else if (event.httpMethod === 'POST') {
    try {
      const totalViewsStr = await kv.get(VIEW_COUNT_KEY);
      let totalViews = totalViewsStr ? parseInt(totalViewsStr) : 100;
      totalViews += 1;
      await kv.put(VIEW_COUNT_KEY, totalViews.toString());
      return {
        statusCode: 200,
        body: JSON.stringify({ totalViews }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, message: 'Failed to increment view count', error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
    };
  }
}
