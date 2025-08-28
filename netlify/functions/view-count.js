import fetch from 'node-fetch';

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const VIEW_COUNT_KEY = 'totalViews';

export async function handler(event) {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Upstash Redis credentials not configured' }),
    };
  }

  const headers = {
    Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'GET') {
    try {
      const response = await fetch(`${UPSTASH_REDIS_REST_URL}/get/${VIEW_COUNT_KEY}`, { headers });
      const data = await response.json();
      const totalViews = data.result !== null ? parseInt(data.result) : 100;
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
      // Increment the view count atomically
      const response = await fetch(`${UPSTASH_REDIS_REST_URL}/incr/${VIEW_COUNT_KEY}`, {
        method: 'POST',
        headers,
      });
      const data = await response.json();
      const totalViews = data.result !== null ? parseInt(data.result) : 100;
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
