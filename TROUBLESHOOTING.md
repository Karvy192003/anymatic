# Anymate Troubleshooting Guide

## Firebase Connectivity Issues

The console logs show several Firebase connectivity errors. Here are some common solutions:

### Error: "Could not reach Cloud Firestore backend. Backend didn't respond within 10 seconds."

This indicates connectivity issues with Firebase. Try the following:

1. **Check your internet connection** - Ensure you have a stable internet connection
2. **Verify Firebase project configuration** - Confirm your Firebase project is properly set up
3. **Check Firebase project status** - Visit the [Firebase Status Dashboard](https://status.firebase.google.com/) to see if there are any ongoing service disruptions
4. **Verify API keys and project IDs** - Ensure the Firebase configuration in `.env` matches your Firebase project

### Error: "Failed to load resource: the server responded with a status of 400"

This could be due to:

1. **Invalid Firebase configuration** - Double-check your Firebase project settings
2. **Firebase rules restrictions** - Review your Firestore security rules
3. **Project quota exceeded** - Check if you've exceeded your Firebase quota limits

## React Router Warnings

The console shows React Router future flag warnings. These are informational and won't affect functionality, but you can address them by:

1. Adding the future flags to your router configuration:

```jsx
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});
```

## OpenAI API Integration

We've added OpenAI API integration for LLM features. To use it:

1. Copy values from `sample.env` to your `.env` file
2. Add your actual OpenAI API key to the `.env` file
3. Import the required functions from `src/services/openaiService.ts` in your components

Example usage:

```typescript
import { generateEducationalContent, generateQuizQuestions } from '../services/openaiService';

// In your component
const handleGenerateContent = async () => {
  try {
    const content = await generateEducationalContent('Photosynthesis', '8th');
    setEducationalContent(content);
  } catch (error) {
    console.error('Error generating content:', error);
  }
};
```

## Founder Profile Images

We've updated the founder profile images to use local files instead of placeholder URLs. The images are stored in:

- `/public/images/karvy-goyel.jpg`
- `/public/images/sachit.jpg`
- `/public/images/satvik-dubey.jpg`

If you need to update these images, replace the files while keeping the same filenames, or update the paths in `HomePage.tsx`.