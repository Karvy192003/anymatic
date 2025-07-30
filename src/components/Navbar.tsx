import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Sparkles, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Official Anymate Logo Component
const AnymateLogo = () => (
  <div className="flex items-center space-x-3 group">
    {/* Robot Logo - Matching the Image */}
    <div className="relative">
      {/* Robot Head - Light Blue */}
      <div className="w-12 h-12 bg-anymate-logoBlue rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
        {/* Eyes - Dark Blue */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-anymate-logoDark rounded-full"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-anymate-logoDark rounded-full"></div>
        {/* Smile - Dark Blue */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-anymate-logoDark rounded-full"></div>
        {/* Ears - Light Blue */}
        <div className="absolute top-1 left-0 w-2 h-2 bg-anymate-logoBlue rounded-full"></div>
        <div className="absolute top-1 right-0 w-2 h-2 bg-anymate-logoBlue rounded-full"></div>
      </div>
      
      {/* Graduation Cap - Dark Blue */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-anymate-logoDark rounded-t-lg">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-anymate-logoDark"></div>
        <div className="absolute -top-2 left-1 w-1 h-2 bg-anymate-logoDark rounded-full"></div>
      </div>
      
      {/* Subtle Sparkle Effect */}
      <div className="absolute -top-1 -right-1">
        <Sparkles className="h-4 w-4 text-anymate-logoMint animate-bounce-slow" />
      </div>
    </div>
    
    {/* Brand Name - Dark Blue */}
    <div className="relative">
      <span className="text-2xl font-bold text-anymate-logoDark">
        Anymate
      </span>
      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full"></div>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/mission', label: 'Mission' },
    { to: '/contact', label: 'Contact' }
  ];

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-white/95 shadow-2xl border border-white/30' 
        : 'backdrop-blur-md bg-white/90 border border-white/20'
    } rounded-2xl`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <AnymateLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === link.to
                    ? 'text-anymate-primary bg-anymate-secondary/10'
                    : 'text-anymate-dark hover:text-anymate-primary hover:bg-anymate-secondary/5'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard/home"
                  className="px-4 py-2 text-sm font-medium text-anymate-dark hover:text-anymate-primary transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-anymate-dark">{user?.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-anymate-dark hover:text-anymate-primary transition-colors duration-300 flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-anymate-dark hover:text-anymate-primary transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-anymate-secondary/10 hover:bg-anymate-secondary/20 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-anymate-primary" /> : <Menu className="h-5 w-5 text-anymate-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-anymate-primary/20">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-anymate-primary bg-anymate-secondary/10'
                      : 'text-anymate-dark hover:text-anymate-primary hover:bg-anymate-secondary/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard/home"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-center text-anymate-dark border border-anymate-primary/30 rounded-lg hover:bg-anymate-secondary/10 transition-all duration-300"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex-1 px-4 py-2 text-sm font-medium text-center text-anymate-dark border border-anymate-primary/30 rounded-lg hover:bg-anymate-secondary/10 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-center text-anymate-dark border border-anymate-primary/30 rounded-lg hover:bg-anymate-secondary/10 transition-all duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;