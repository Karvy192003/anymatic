import './polyfills';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { createDefaultAdmin } from './services/firebaseAuth';

// Initialize the default admin user but don't block app startup
createDefaultAdmin().catch(error => {
  console.error('Failed to create default admin:', error);
  console.warn('Application will continue without admin user creation');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
