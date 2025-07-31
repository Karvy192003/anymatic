import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Jaipur, India"],
      color: "from-[#3A86FF] to-[#A259FF]"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7876434370", "Mon-Fri 9AM-6PM"],
      color: "from-[#7AE582] to-[#3A86FF]"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["skaistha16@gmail.com", "karvy1902@gmail.com"],
      color: "from-[#FFD166] to-[#FF5CA8]"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Online Support", "Live Chat Available"],
      color: "from-[#FF5CA8] to-[#A259FF]"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#3A86FF]/20 to-[#A259FF]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#7AE582]/20 to-[#FFD166]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-[#3A86FF] to-[#A259FF] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about Anymate? We'd love to hear from you. 
              Reach out to our friendly team for support, partnerships, or just to say hello!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#3A86FF] focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.name
                        ? 'top-2 text-xs text-[#3A86FF] font-medium'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      top: formData.name ? 8 : 16,
                      fontSize: formData.name ? '0.75rem' : '1rem',
                      color: formData.name ? '#3A86FF' : '#6B7280'
                    }}
                  >
                    Your Name
                  </motion.label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#3A86FF] focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.email
                        ? 'top-2 text-xs text-[#3A86FF] font-medium'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      top: formData.email ? 8 : 16,
                      fontSize: formData.email ? '0.75rem' : '1rem',
                      color: formData.email ? '#3A86FF' : '#6B7280'
                    }}
                  >
                    Email Address
                  </motion.label>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#3A86FF] focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.subject
                        ? 'top-2 text-xs text-[#3A86FF] font-medium'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      top: formData.subject ? 8 : 16,
                      fontSize: formData.subject ? '0.75rem' : '1rem',
                      color: formData.subject ? '#3A86FF' : '#6B7280'
                    }}
                  >
                    Subject
                  </motion.label>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#3A86FF] focus:outline-none transition-colors duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder=" "
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      formData.message
                        ? 'top-2 text-xs text-[#3A86FF] font-medium'
                        : 'top-4 text-gray-500'
                    }`}
                    animate={{
                      top: formData.message ? 8 : 16,
                      fontSize: formData.message ? '0.75rem' : '1rem',
                      color: formData.message ? '#3A86FF' : '#6B7280'
                    }}
                  >
                    Your Message
                  </motion.label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-[#7AE582]'
                      : 'bg-gradient-to-r from-[#3A86FF] to-[#A259FF] hover:shadow-lg hover:scale-105'
                  }`}
                  whileHover={!isLoading && !isSubmitted ? { scale: 1.05 } : {}}
                  whileTap={!isLoading && !isSubmitted ? { scale: 0.95 } : {}}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-br from-[#3A86FF]/10 to-[#A259FF]/10 rounded-2xl p-8 text-center border border-white/30"
            >
              <MapPin className="h-12 w-12 text-[#3A86FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">Find Us</h3>
              <p className="text-gray-600">
                Located in the heart Jaipur
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
