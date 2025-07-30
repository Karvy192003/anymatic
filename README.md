# Anymate

## Deployment on Netlify

1. **Build Command:**
   ```
   npm run build
   ```
2. **Publish Directory:**
   ```
   dist
   ```
3. **Environment Variables:**
   - If you want to use environment variables for Firebase config, create a `.env` file and use `VITE_` prefix (e.g., `VITE_FIREBASE_API_KEY`).
   - Update `src/config/firebase.ts` to use these variables if needed.

4. **Steps:**
   - Push your code to GitHub/GitLab/Bitbucket.
   - Connect your repository to Netlify.
   - Set the build command and publish directory as above.
   - (Optional) Add environment variables in Netlify dashboard if you use them.

The app builds successfully and is ready for deployment! 
