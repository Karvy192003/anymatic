import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Linkedin, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Globe, Sparkles } from 'lucide-react';

// Official Anymate Logo Component
const AnymateLogo = () => (
  <div className="flex items-center space-x-3">
    {/* Robot Logo - Matching the Image */}
    <div className="relative">
      {/* Robot Head - Light Blue */}
      <div className="w-10 h-10 bg-anymate-logoBlue rounded-full flex items-center justify-center relative overflow-hidden">
        {/* Eyes - Dark Blue */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-anymate-logoDark rounded-full"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-anymate-logoDark rounded-full"></div>
        {/* Smile - Dark Blue */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-anymate-logoDark rounded-full"></div>
        {/* Ears - Light Blue */}
        <div className="absolute top-1 left-0 w-2 h-2 bg-anymate-logoBlue rounded-full"></div>
        <div className="absolute top-1 right-0 w-2 h-2 bg-anymate-logoBlue rounded-full"></div>
      </div>
      
      {/* Graduation Cap - Dark Blue */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-anymate-logoDark rounded-t-lg">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-anymate-logoDark"></div>
        <div className="absolute -top-2 left-1 w-1 h-2 bg-anymate-logoDark rounded-full"></div>
      </div>
    </div>
    {/* Brand Name */}
    <span className="text-2xl font-bold text-white">
      Anymate
    </span>
  </div>
);

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-anymate-secondary' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-anymate-secondary' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-anymate-secondary' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-anymate-secondary' }
  ];

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/mission', label: 'Our Mission' },
    { to: '/contact', label: 'Contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 7876434370' },
    { icon: Mail, text: 'skaistha16@gmail.com', href: 'mailto:skaistha16@gmail.com' },
    { icon: Globe, text: 'https://anymate12.netlify.app/contact', href: 'https://anymate12.netlify.app/contact' },
    { icon: MapPin, text: 'Jaipur India', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-r from-anymate-dark to-anymate-primary text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-anymate-secondary/10 to-anymate-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-anymate-primary/10 to-anymate-secondary/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <AnymateLogo />
            <p className="text-anymate-light/80 max-w-sm">
              Your Smart Learning Companion. Transform complex topics into engaging, story-based animated videos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-anymate-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-anymate-light/80 hover:text-anymate-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-anymate-secondary">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center space-x-3 text-anymate-light/80 hover:text-anymate-secondary transition-colors duration-300"
                  >
                    <info.icon className="h-4 w-4 text-anymate-secondary" />
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-anymate-secondary">Stay Updated</h3>
            <p className="text-anymate-light/80 text-sm">
              Get the latest learning tips and updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-anymate-light/60 focus:outline-none focus:border-anymate-secondary transition-all duration-300"
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-anymate-secondary to-anymate-primary text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-anymate-light/60 text-sm">
            © 2024 Anymate. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-anymate-light/60 hover:text-anymate-secondary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-anymate-light/60 hover:text-anymate-secondary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-anymate-light/60 hover:text-anymate-secondary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
