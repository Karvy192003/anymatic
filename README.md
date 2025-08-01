# Anymate

## Deployment on Firebase Hosting

1. **Prerequisites:**
   - Install Firebase CLI globally (if not already installed):
     ```
     npm install -g firebase-tools
     ```
   - Login to Firebase:
     ```
     firebase login
     ```

2. **Deploy Command:**
   ```
   npm run deploy
   ```
   This will build the app and deploy it to Firebase Hosting.

3. **Manual Deployment Steps:**
   - Build the app: `npm run build`
   - Deploy to Firebase: `firebase deploy`

4. **Environment Variables:**
   - If you want to use environment variables for Firebase config, create a `.env` file and use `VITE_` prefix (e.g., `VITE_FIREBASE_API_KEY`).
   - Update `src/config/firebase.ts` to use these variables if needed.

# Anymate
## Deployment on Netlify

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```
   netlify login
   ```

3. **Initialize Netlify (First time only):**
   ```
   netlify init
   ```
   Follow the prompts to create a new site or connect to an existing one.

4. **Deploy Command:**
   ```
   npm run deploy:netlify
   ```
   This will build the app and deploy it to Netlify.

### Option 2: Deploy via Netlify Dashboard

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Select your repository
   - Configure the following settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

### Environment Variables

To ensure Firebase works correctly on Netlify, you must configure environment variables:

1. Go to your Netlify site dashboard → Site settings → Build & deploy → Environment
2. Add the following environment variables from your Firebase project:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

### Netlify Configuration

This project includes a `netlify.toml` file that configures:
- Build settings
- SPA routing (redirects all routes to index.html)
- Security headers
- Asset caching

You can modify this file to customize your Netlify deployment further.

### Troubleshooting

If you encounter issues with routing or Firebase authentication:

1. **Routing Issues:** Ensure the `netlify.toml` file contains the correct redirect rule for SPA routing.
2. **Firebase Authentication:** Verify that all environment variables are correctly set in Netlify.
3. **CORS Issues:** If you're accessing external APIs, you may need to configure CORS settings.

The app builds successfully and is ready for deployment! 
#   a n y m a t i c 
 
 # anymatic
