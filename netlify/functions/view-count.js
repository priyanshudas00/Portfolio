import fs from 'fs';
import path from 'path';

// Common CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

export const handler = async function(event, context) {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: 'OK',
    };
  }

  // Path to the view count JSON file
  // For Netlify deployment, we need to use a different path structure
  let viewCountFilePath;
  
  // Debug logging
  console.log('NETLIFY environment:', process.env.NETLIFY);
  console.log('CONTEXT environment:', process.env.CONTEXT);
  console.log('SITE_URL environment:', process.env.URL);
  console.log('DEPLOY_URL environment:', process.env.DEPLOY_URL);
  console.log('Current working directory:', process.cwd());
  
  // More robust Netlify detection
  const isNetlify = process.env.NETLIFY === 'true' || 
                    process.env.CONTEXT === 'production' || 
                    process.env.CONTEXT === 'deploy-preview' ||
                    process.env.URL?.includes('netlify.app') ||
                    process.env.DEPLOY_URL?.includes('netlify.app');
  
  // Check if dist/server directory exists (Netlify deployment)
  const distServerPath = path.join(process.cwd(), 'dist', 'server', 'viewCount.json');
  const serverPath = path.join(process.cwd(), 'server', 'viewCount.json');
  
  if (isNetlify && fs.existsSync(distServerPath)) {
    // Running on Netlify - use the dist/server directory
    viewCountFilePath = distServerPath;
    console.log('Using Netlify path:', viewCountFilePath);
  } else if (fs.existsSync(serverPath)) {
    // Running locally or Netlify CLI - use the server directory
    viewCountFilePath = serverPath;
    console.log('Using local path:', viewCountFilePath);
  } else {
    // Fallback: try to create the file if it doesn't exist
    viewCountFilePath = distServerPath;
    console.log('Using fallback path:', viewCountFilePath);
    
    // Create the file with initial data if it doesn't exist
    if (!fs.existsSync(viewCountFilePath)) {
      const initialData = {
        totalViews: 100,
        lastUpdated: new Date().toISOString()
      };
      fs.writeFileSync(viewCountFilePath, JSON.stringify(initialData, null, 2));
      console.log('Created initial view count file');
    }
  }

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
