import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Users, Globe, Target, Zap, BookOpen, Award } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Quizzes",
      description: "Adaptive quizzes that adjust to your learning pace and identify knowledge gaps in real-time.",
      features: ["Smart difficulty adjustment", "Instant feedback", "Progress tracking"],
      color: "from-[#3A86FF] to-[#A259FF]",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description: "Customized curriculum based on your goals, interests, and learning style preferences.",
      features: ["Goal-oriented planning", "Skill assessment", "Adaptive content"],
      color: "from-[#7AE582] to-[#3A86FF]",
      delay: 0.2
    },
    {
      icon: BookOpen,
      title: "Interactive Video Indexing",
      description: "Smart video chapters with searchable content and interactive annotations.",
      features: ["Chapter navigation", "Content search", "Note-taking"],
      color: "from-[#FFD166] to-[#FF5CA8]",
      delay: 0.3
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Learn in your preferred language with real-time translation and localized content.",
      features: ["50+ languages", "Cultural context", "Native speakers"],
      color: "from-[#FF5CA8] to-[#A259FF]",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Study groups, peer reviews, and community-driven content creation.",
      features: ["Study groups", "Peer feedback", "Community challenges"],
      color: "from-[#A259FF] to-[#3A86FF]",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Instant Explanations",
      description: "Get immediate clarification on any concept with AI-powered explanations.",
      features: ["Real-time help", "Context-aware", "Multiple formats"],
      color: "from-[#3A86FF] to-[#7AE582]",
      delay: 0.6
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Earn verified certificates and badges to showcase your learning achievements.",
      features: ["Industry recognition", "Skill verification", "Portfolio building"],
      color: "from-[#7AE582] to-[#FFD166]",
      delay: 0.7
    },
    {
      icon: Bot,
      title: "AI Learning Assistant",
      description: "24/7 AI companion that provides personalized guidance and motivation.",
      features: ["Personal coaching", "Progress insights", "Learning recommendations"],
      color: "from-[#FFD166] to-[#A259FF]",
      delay: 0.8
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
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-[#3A86FF] to-[#A259FF] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover innovative learning solutions powered by AI technology, designed to make 
              education more engaging, personalized, and effective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, rotateX: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                className="group perspective-1000"
              >
                <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 h-full transform-gpu">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3 group-hover:text-[#3A86FF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: service.delay + featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-[#7AE582] rounded-full mr-2"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#3A86FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-6">
              Ready to Experience the Future of Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of learners who are already transforming their education with Anymate.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(58, 134, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#3A86FF] to-[#A259FF] text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;