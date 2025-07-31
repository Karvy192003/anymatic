import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Play, BookOpen, Users, Sparkles, ArrowRight, Star, Zap, Target, Heart, CheckCircle, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced Anymate Logo Component
const AnymateLogo = () => (
  <div className="flex items-center space-x-3 group">
    {/* Enhanced Robot Logo */}
    <div className="relative">
      <div className="w-20 h-20 bg-gradient-to-br from-anymate-logoBlue to-anymate-primary rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-2xl">
        {/* Animated Background Ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-anymate-secondary to-anymate-primary rounded-full animate-spin opacity-20" style={{ animationDuration: '8s' }}></div>
        
        {/* Robot Head */}
        <div className="relative z-10">
          {/* Eyes with Glow Effect */}
          <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-anymate-logoDark rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-anymate-logoDark rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          {/* Smile */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-anymate-logoDark rounded-full"></div>
          {/* Ears with Glow */}
          <div className="absolute top-2 left-0 w-2.5 h-2.5 bg-anymate-logoBlue rounded-full shadow-md"></div>
          <div className="absolute top-2 right-0 w-2.5 h-2.5 bg-anymate-logoBlue rounded-full shadow-md"></div>
        </div>
      </div>
      
      {/* Enhanced Graduation Cap */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-14 h-4 bg-gradient-to-r from-anymate-logoDark to-anymate-primary rounded-t-lg shadow-lg">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-anymate-primary to-anymate-logoDark"></div>
        <div className="absolute -top-2 left-1.5 w-1 h-2 bg-gradient-to-b from-anymate-primary to-anymate-logoDark rounded-full"></div>
      </div>
      
      {/* Enhanced Sparkle Effects */}
      <div className="absolute -top-2 -right-2">
        <Sparkles className="h-5 w-5 text-anymate-logoMint animate-bounce-slow" />
      </div>
      <div className="absolute -bottom-1 -left-1">
        <Sparkles className="h-4 w-4 text-anymate-secondary animate-bounce-slow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-1/2 -right-3">
        <Sparkles className="h-3 w-3 text-anymate-primary animate-bounce-slow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
    
    {/* Enhanced Brand Name */}
    <div className="relative">
      <span className="text-4xl font-bold bg-gradient-to-r from-anymate-logoDark via-anymate-primary to-anymate-secondary bg-clip-text text-transparent">
        Anymate
      </span>
      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full shadow-lg"></div>
    </div>
  </div>
);

// Meet Our Founders Section
const founders = [
  {
    name: 'Karvy Goyel',
    role: 'Co-founder & Chief Marketing Officer (CMO)',
    img: '/images/karvy-goyel.jpg',
    bio: `Karvy is a visionary marketer and co-founder who blends creative storytelling with strategic precision. As CMO, she leads brand growth and customer engagement with bold ideas and data-driven execution.`
  },
  {
    name: 'Sachit',
    role: 'Co-founder & Chief Executive Officer (CEO)',
    img: '/images/sachit.jpg',
    bio: `Sachit sets the vision and pace of the company. As CEO and co-founder, he ensures our product, mission, and culture move forward together with clarity and purpose.`
  },
  {
    name: 'Satvik Dubey',
    role: 'Co-founder & Chief Technology Officer (CTO)',
    img: '/images/satvik-dubey.jpg',
    bio: `Satvik drives our tech innovation. As CTO and co-founder, he builds systems that scale, leads engineering with precision, and ensures we stay ahead in product development.`
  }
];

function FounderFlipCard({ founder }: { founder: typeof founders[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="w-full max-w-xs mx-auto cursor-pointer group [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped(f => !f)}
      tabIndex={0}
      aria-label={`Flip card for ${founder.name}`}
    >
      <div className={`relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}> 
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 [backface-visibility:hidden] border border-gray-100">
          <img src={founder.img} alt={founder.name} className="w-24 h-24 rounded-full object-cover shadow-lg mb-4 border-4 border-anymate-primary" />
          <h3 className="text-xl font-bold text-anymate-primary mb-1">{founder.name}</h3>
          <p className="text-sm text-gray-500 font-medium text-center">{founder.role}</p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-anymate-primary to-anymate-secondary rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-gray-100">
          <p className="text-white text-base text-center font-medium">{founder.bio}</p>
        </div>
      </div>
    </div>
  );
}

const HomePage = () => {
  const [counters, setCounters] = useState({
    reels: 0,
    subjects: 0,
    learners: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounter = (target: number, key: keyof typeof counters, duration: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    setTimeout(() => {
      animateCounter(1500, 'reels', 2000);
      animateCounter(100, 'subjects', 1500);
      animateCounter(10000, 'learners', 2500);
    }, 500);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Anymate made complex algorithms feel like exciting stories. I finally understand data structures!"
    },
    {
      name: "Marcus Johnson",
      role: "Software Developer",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The animated explanations are brilliant. I use Anymate to explain concepts to my junior developers."
    },
    {
      name: "Priya Sharma",
      role: "Medical Student",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Biology has never been this engaging. The story-based approach helps me remember everything!"
    }
  ];

  return (
    <div className="pt-24 relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-anymate-primary/20 to-anymate-secondary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-anymate-secondary/20 to-anymate-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-anymate-primary/10 to-anymate-secondary/10 rounded-full blur-2xl animate-pulse-slow"></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-anymate-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-anymate-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-6xl lg:text-8xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-anymate-logoDark via-anymate-primary to-anymate-secondary bg-clip-text text-transparent">
                    Anymate
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-3xl lg:text-4xl text-anymate-dark font-medium"
                >
                  Your Smart Learning Companion
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-lg text-anymate-gray max-w-md"
                >
                  Transform complex topics into engaging, story-based animated videos. 
                  Learn faster, remember longer, and make education fun again.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/signup"
                  className="group px-8 py-4 bg-gradient-to-r from-anymate-primary to-anymate-secondary text-white rounded-2xl font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-anymate-secondary to-anymate-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Learning</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Link>
                <button className="group px-8 py-4 border-2 border-anymate-primary text-anymate-primary rounded-2xl font-medium hover:bg-gradient-to-r hover:from-anymate-primary hover:to-anymate-secondary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </motion.div>

              {/* Enhanced Animated Counters */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { value: counters.reels, label: "Animated Reels", suffix: "+", icon: Sparkles, color: "from-anymate-primary to-anymate-secondary" },
                  { value: counters.subjects, label: "Subjects Simplified", suffix: "+", icon: Target, color: "from-anymate-secondary to-anymate-primary" },
                  { value: counters.learners, label: "Learners Impacted", suffix: "+", icon: Heart, color: "from-anymate-primary to-anymate-secondary" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-anymate-primary to-anymate-secondary bg-clip-text text-transparent">
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-sm text-anymate-gray mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Bot Mascot */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Enhanced Floating Animation */}
              <div className="animate-float">
                <div className="w-96 h-96 bg-gradient-to-br from-anymate-primary to-anymate-secondary rounded-full flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <AnymateLogo />
                  
                  {/* Enhanced Sparkle Effects */}
                  <div className="absolute top-8 right-8 w-6 h-6 bg-anymate-logoMint rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute bottom-12 left-12 w-4 h-4 bg-anymate-secondary rounded-full animate-pulse delay-300 shadow-lg"></div>
                  <div className="absolute top-1/3 left-8 w-3 h-3 bg-anymate-primary rounded-full animate-pulse delay-700 shadow-lg"></div>
                  <div className="absolute bottom-1/3 right-6 w-5 h-5 bg-anymate-logoMint rounded-full animate-pulse delay-1000 shadow-lg"></div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-anymate-secondary to-anymate-primary rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Sparkles className="h-10 w-10 text-white" />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <BookOpen className="h-10 w-10 text-white" />
              </motion.div>
              <motion.div 
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-anymate-logoMint to-anymate-primary rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Zap className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-anymate-light to-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-anymate-primary/10 to-anymate-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-anymate-secondary/10 to-anymate-primary/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-anymate-dark mb-4">
              Why Choose <span className="bg-gradient-to-r from-anymate-primary to-anymate-secondary bg-clip-text text-transparent">Anymate</span>?
            </h2>
            <p className="text-lg text-anymate-gray max-w-2xl mx-auto">
              Experience the future of learning with AI-powered storytelling and interactive content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI-Powered",
                description: "Smart algorithms create personalized learning experiences",
                color: "from-anymate-primary to-anymate-secondary",
                features: ["Personalized Learning", "Adaptive Content", "Smart Recommendations"]
              },
              {
                icon: Play,
                title: "Story-Based",
                description: "Complex topics explained through engaging narratives",
                color: "from-anymate-secondary to-anymate-primary",
                features: ["Narrative Learning", "Character-Driven", "Emotional Connection"]
              },
              {
                icon: Sparkles,
                title: "Interactive",
                description: "Hands-on learning with quizzes and activities",
                color: "from-anymate-primary to-anymate-secondary",
                features: ["Interactive Quizzes", "Real-time Feedback", "Gamified Learning"]
              },
              {
                icon: Users,
                title: "Community",
                description: "Learn together with thousands of motivated learners",
                color: "from-anymate-secondary to-anymate-primary",
                features: ["Peer Learning", "Discussion Forums", "Study Groups"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-anymate-dark mb-2">{feature.title}</h3>
                <p className="text-anymate-gray mb-4">{feature.description}</p>
                
                {/* Feature List */}
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-anymate-secondary" />
                      <span className="text-sm text-anymate-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-anymate-light/30">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-anymate-primary mb-4">Meet Our Founders</h2>
          <p className="text-lg text-gray-600">The visionaries leading Anymate’s journey.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {founders.map((founder, idx) => (
            <FounderFlipCard founder={founder} key={idx} />
          ))}
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-anymate-primary/5 to-anymate-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-anymate-secondary/5 to-anymate-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-anymate-dark mb-4">
              What Our Learners Say
            </h2>
            <p className="text-lg text-anymate-gray">
              Join thousands of satisfied learners who transformed their education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-anymate-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-anymate-dark">{testimonial.name}</h4>
                    <p className="text-sm text-anymate-gray">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-anymate-warning fill-current" />
                  ))}
                </div>
                <p className="text-anymate-gray italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-anymate-primary to-anymate-secondary relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Learning?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Join Anymate today and discover a new way to master any subject through engaging stories and animations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/signup"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-anymate-primary rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;