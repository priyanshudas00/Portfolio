const fs = require('fs');
const path = require('path');

// Common CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

exports.handler = async function(event, context) {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK',
    };
  }

  // Path to the view count JSON file
  const viewCountFilePath = path.join(process.cwd(), 'server', 'viewCount.json');

  try {
    if (event.httpMethod === 'GET') {
      // Read and return the current view count
      const data = fs.readFileSync(viewCountFilePath, 'utf8');
      const viewCount = JSON.parse(data);
      
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(viewCount),
      };
    } else if (event.httpMethod === 'POST') {
      // Increment the view count
      const data = fs.readFileSync(viewCountFilePath, 'utf8');
      const viewCount = JSON.parse(data);
      viewCount.totalViews += 1;
      viewCount.lastUpdated = new Date().toISOString();

      fs.writeFileSync(viewCountFilePath, JSON.stringify(viewCount, null, 2));

      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ success: true, totalViews: viewCount.totalViews }),
      };
    } else {
      return {
        statusCode: 405,
        headers: corsHeaders,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
    }
  } catch (error) {
    console.error('Error handling view count:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ 
        success: false, 
        message: 'Error handling view count',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      }),
    };
  }
};
