// Netlify Build Plugin for Anymate
module.exports = {
  onPreBuild: ({ utils }) => {
    console.log('🔍 Checking for environment variables...');
    
    // Check for required environment variables
    const requiredEnvVars = [
      'VITE_FIREBASE_API_KEY',
      'VITE_FIREBASE_AUTH_DOMAIN',
      'VITE_FIREBASE_PROJECT_ID',
      'VITE_FIREBASE_STORAGE_BUCKET',
      'VITE_FIREBASE_MESSAGING_SENDER_ID',
      'VITE_FIREBASE_APP_ID'
    ];
    
    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
    
    if (missingEnvVars.length > 0) {
      console.warn('⚠️ Missing environment variables:', missingEnvVars.join(', '));
      console.warn('⚠️ The application may not function correctly without these variables.');
    } else {
      console.log('✅ All required environment variables are set.');
    }
  },
  
  onBuild: ({ utils }) => {
    console.log('🏗️ Build completed successfully!');
  },
  
  onPostBuild: ({ utils }) => {
    console.log('📦 Preparing for deployment...');
    
    // Ensure _redirects file exists
    try {
      const fs = require('fs');
      const redirectsPath = 'dist/_redirects';
      
      if (!fs.existsSync(redirectsPath)) {
        console.log('⚠️ _redirects file not found, creating it...');
        fs.writeFileSync(redirectsPath, '/* /index.html 200\n');
        console.log('✅ Created _redirects file for SPA routing.');
      } else {
        console.log('✅ _redirects file already exists.');
      }
    } catch (error) {
      console.error('❌ Error handling _redirects file:', error);
    }
  },
  
  onSuccess: ({ utils }) => {
    console.log('🚀 Deployment successful!');
  }
};