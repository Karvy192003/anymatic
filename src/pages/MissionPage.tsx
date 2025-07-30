import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Globe, Lightbulb, Rocket, Award } from 'lucide-react';

const MissionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We believe learning should ignite curiosity and inspire growth."
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Making quality education accessible to learners from all backgrounds."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Continuously pushing the boundaries of educational technology."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change in education systems worldwide."
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
              Mission & <span className="bg-gradient-to-r from-[#3A86FF] to-[#A259FF] bg-clip-text text-transparent">Vision</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shaping the future of education through innovative storytelling and AI-powered learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(58, 134, 255, 0.15)"
            }}
            className="relative group perspective-1000"
          >
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 h-full relative overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3A86FF]/20 to-[#A259FF]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#3A86FF] to-[#A259FF] rounded-2xl flex items-center justify-center mr-4"
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-[#2D2D2D]">Our Mission</h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To revolutionize education by transforming complex concepts into engaging, 
                  story-driven learning experiences. We strive to make quality education 
                  accessible, enjoyable, and effective for learners worldwide through 
                  innovative AI technology and creative storytelling.
                </p>
                
                <div className="flex items-center space-x-4">
                  <Rocket className="h-6 w-6 text-[#7AE582]" />
                  <span className="text-[#7AE582] font-medium">Empowering learners since 2024</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: -5,
              boxShadow: "0 25px 50px rgba(122, 229, 130, 0.15)"
            }}
            className="relative group perspective-1000"
          >
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 h-full relative overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7AE582]/20 to-[#FFD166]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#7AE582] to-[#FFD166] rounded-2xl flex items-center justify-center mr-4"
                  >
                    <Eye className="h-8 w-8 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-[#2D2D2D]">Our Vision</h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To create a world where learning is limitless, joyful, and deeply personal. 
                  We envision a future where every individual has access to personalized 
                  education that adapts to their unique learning style, fostering creativity, 
                  critical thinking, and lifelong curiosity.
                </p>
                
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-[#FFD166]" />
                  <span className="text-[#FFD166] font-medium">Building tomorrow's learners</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Anymate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#3A86FF] to-[#A259FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg"
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3 group-hover:text-[#3A86FF] transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-[#3A86FF] to-[#A259FF] rounded-3xl p-12 text-white text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Our Impact So Far</h2>
              <p className="text-xl mb-12 opacity-90">
                Making a difference in education, one learner at a time
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "10,000+", label: "Active Learners" },
                  { number: "1,500+", label: "Animated Stories" },
                  { number: "95%", label: "Learning Retention" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;