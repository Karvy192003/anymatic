// A simple Netlify serverless function
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello from Anymate serverless function!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred' })
    };
  }
};