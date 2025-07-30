import React, { useEffect, useState } from 'react';
import { Bot, Smartphone, Play } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-[#3A86FF] to-[#A259FF] bg-clip-text text-transparent">Anymate</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing education by transforming complex concepts into engaging, 
              story-driven animated experiences that make learning memorable and fun.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-tight">
                Making Complex Topics 
                <span className="block text-[#3A86FF]">Simple & Engaging</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Anymate, we believe that every complex concept can be broken down into 
                  relatable stories and visual narratives. Our AI-powered platform creates 
                  personalized learning experiences that adapt to your learning style.
                </p>
                
                <p>
                  Whether you're a student struggling with calculus, a professional learning 
                  new programming languages, or anyone curious about the world around them, 
                  Anymate transforms abstract ideas into concrete, memorable experiences.
                </p>
                
                <p>
                  Our unique approach combines storytelling, animation, and interactive 
                  elements to create an immersive learning environment that makes education 
                  accessible, enjoyable, and effective.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-gradient-to-br from-[#3A86FF]/10 to-[#A259FF]/10 rounded-2xl">
                  <div className="text-3xl font-bold text-[#3A86FF] mb-2">95%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#7AE582]/10 to-[#FFD166]/10 rounded-2xl">
                  <div className="text-3xl font-bold text-[#7AE582] mb-2">3x</div>
                  <div className="text-sm text-gray-600">Faster Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-gray-50 flex items-center justify-between px-6 text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#3A86FF] to-[#A259FF] rounded-lg flex items-center justify-center">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-[#3A86FF]">Anymate</span>
                      </div>
                    </div>

                    {/* Video Cards */}
                    <div className="space-y-4">
                      {[
                        {
                          title: "Understanding APIs",
                          description: "Restaurant ordering story",
                          color: "from-blue-400 to-purple-500"
                        },
                        {
                          title: "Database Relations",
                          description: "Library organization tale",
                          color: "from-green-400 to-blue-500"
                        },
                        {
                          title: "Machine Learning",
                          description: "Pattern recognition journey",
                          color: "from-purple-400 to-pink-500"
                        }
                      ].map((video, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className={`w-full h-20 bg-gradient-to-r ${video.color} rounded-xl mb-3 flex items-center justify-center`}>
                            <Play className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="font-semibold text-[#2D2D2D] mb-1">{video.title}</h3>
                          <p className="text-sm text-gray-600">{video.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FFD166] rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#7AE582] rounded-xl flex items-center justify-center animate-pulse delay-300 shadow-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8F9FA] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To democratize quality education by making complex concepts accessible through 
            innovative storytelling and cutting-edge technology. We believe every learner 
            deserves content that sparks curiosity and builds genuine understanding.
          </p>
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-[#3A86FF] to-[#A259FF] rounded-2xl text-white">
            <Bot className="h-6 w-6" />
            <span className="font-medium">Powered by AI, Driven by Passion</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;