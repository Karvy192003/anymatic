import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useContext } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MissionPage from './pages/MissionPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center h-screen text-xl">Loading...</div>;
  if (!user || !user.isAdmin) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/admin" element={
              <PrivateRoute>
                <Suspense fallback={<div className="flex items-center justify-center h-screen text-xl">Loading Admin...</div>}>
                  <AdminDashboard />
                </Suspense>
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}