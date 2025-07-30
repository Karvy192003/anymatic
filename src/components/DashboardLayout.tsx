import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Bot, Home, Plus, Bookmark, User, Menu, X, Sparkles, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Official Anymate Logo Component
const AnymateLogo = () => (
  <div className="flex items-center space-x-3">
    {/* Robot Logo - Matching the Image */}
    <div className="relative">
      {/* Robot Head - Light Blue */}
      <div className="w-8 h-8 bg-anymate-logoBlue rounded-full flex items-center justify-center relative overflow-hidden">
        {/* Eyes - Dark Blue */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-anymate-logoDark rounded-full"></div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-anymate-logoDark rounded-full"></div>
        {/* Smile - Dark Blue */}
        <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-anymate-logoDark rounded-full"></div>
        {/* Ears - Light Blue */}
        <div className="absolute top-0.5 left-0 w-1 h-1 bg-anymate-logoBlue rounded-full"></div>
        <div className="absolute top-0.5 right-0 w-1 h-1 bg-anymate-logoBlue rounded-full"></div>
      </div>
      
      {/* Graduation Cap - Dark Blue */}
      <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-anymate-logoDark rounded-t-lg">
        <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-anymate-logoDark"></div>
        <div className="absolute -top-1 left-0.5 w-0.5 h-1 bg-anymate-logoDark rounded-full"></div>
      </div>
    </div>
    {/* Brand Name */}
    <span className="text-xl font-bold text-anymate-logoDark">
      Anymate
    </span>
  </div>
);

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navigation = [
    { to: '/dashboard/home', label: 'Home', icon: Home },
    { to: '/dashboard/create', label: 'Create', icon: Plus },
    { to: '/dashboard/saved', label: 'Saved', icon: Bookmark },
    { to: '/dashboard/profile', label: 'Profile', icon: User }
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-anymate-light via-white to-anymate-primary/5">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-white/30 px-4 py-3 flex items-center justify-between">
        <AnymateLogo />
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-anymate-secondary/10 hover:bg-anymate-secondary/20 transition-all duration-300"
        >
          {isSidebarOpen ? <X className="h-5 w-5 text-anymate-primary" /> : <Menu className="h-5 w-5 text-anymate-primary" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-xl border-r border-white/30 transform transition-transform duration-300 lg:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/30">
            <AnymateLogo />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  location.pathname === item.to
                    ? 'bg-gradient-to-r from-anymate-primary to-anymate-secondary text-white shadow-lg'
                    : 'text-anymate-dark hover:bg-anymate-secondary/10 hover:text-anymate-primary'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {location.pathname === item.to && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-6 border-t border-white/30">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-anymate-secondary/10">
              <div className="w-10 h-10 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-anymate-dark">{user?.username || 'User'}</p>
                <p className="text-xs text-anymate-gray">{user?.isPremium ? 'Premium Member' : 'Free Member'}</p>
              </div>
            </div>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full mt-3 flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-anymate-dark hover:text-anymate-primary hover:bg-anymate-secondary/10 rounded-lg transition-all duration-300"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;