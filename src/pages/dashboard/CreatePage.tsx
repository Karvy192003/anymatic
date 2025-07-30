import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, BookOpen, Loader2, Wand2, Lightbulb, Target, Zap, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { firebaseDb } from '../../services/firebaseDb';
import { GeneratedReel } from '../../types';

const CreatePage = () => {
  const { user } = useAuth();
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentReel, setCurrentReel] = useState<GeneratedReel | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const sampleTopics = [
    "Explain photosynthesis in a fun way",
    "How does gravity work?",
    "The water cycle story",
    "Basic algebra concepts",
    "Human body systems",
    "Solar system exploration",
    "Chemical reactions",
    "World history timeline"
  ];

  const handleGenerateReel = async () => {
    if (!query.trim()) return;
    setIsGenerating(true);
    setGenerationProgress(0);
    setError(null);
    const progressInterval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);
    try {
      // Simulate AI generation (replace with your own logic if needed)
      const generatedReel: Omit<GeneratedReel, 'id'> = {
        title: query,
        description: `An engaging story about: ${query}`,
        videoUrl: '',
        thumbnail: '',
        duration: '1:00',
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false,
        isBookmarked: false,
        userId: user?.id || '1',
      };
      // Save to Firestore
      const reel = await firebaseDb.reels.create(generatedReel, user?.id || '1');
      setCurrentReel(reel);
      setGenerationProgress(100);
      setQuery('');
    } catch (err) {
      setError('Failed to generate reel. Please try again.');
    } finally {
      setIsGenerating(false);
      setGenerationProgress(0);
    }
  };

  const handleLike = async () => {
    if (!currentReel) return;
    try {
      const { likes, isLiked } = await firebaseDb.reels.toggleLike(currentReel.id, user?.id || '1');
      setCurrentReel({ ...currentReel, isLiked, likes });
    } catch (err) {
      setError('Error liking reel.');
    }
  };

  const handleBookmark = () => {
    if (currentReel) {
      setCurrentReel({
        ...currentReel,
        isBookmarked: !currentReel.isBookmarked
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-anymate-light via-white to-anymate-primary/5 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-anymate-dark mb-4">
            Create Your Story
          </h1>
          <p className="text-lg text-anymate-gray max-w-2xl mx-auto">
            Transform any topic into an engaging Instagram-style reel using AI-powered storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Creation Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Query Input */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-xl flex items-center justify-center">
                  <Wand2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-anymate-dark">Story Prompt</h3>
                  <p className="text-sm text-anymate-gray">Describe what you want to learn</p>
                </div>
              </div>

              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Explain quantum physics in a simple way, or tell a story about the water cycle..."
                className="w-full h-32 p-4 border border-anymate-primary/20 rounded-xl resize-none focus:outline-none focus:border-anymate-primary focus:ring-2 focus:ring-anymate-primary/20 transition-all duration-300"
                disabled={isGenerating}
              />

              {/* Error Display */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm text-red-700">{error}</span>
                </div>
              )}

              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-anymate-gray">
                  {query.length}/500 characters
                </span>
                <button
                  onClick={handleGenerateReel}
                  disabled={!query.trim() || isGenerating}
                  className="px-6 py-3 bg-gradient-to-r from-anymate-primary to-anymate-secondary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      <span>Generate Reel</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress Bar */}
              {isGenerating && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-anymate-gray mb-2">
                    <span>Generating your story...</span>
                    <span>{generationProgress}%</span>
                  </div>
                  <div className="w-full bg-anymate-primary/20 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-anymate-primary to-anymate-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${generationProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sample Topics */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30">
              <h3 className="text-lg font-semibold text-anymate-dark mb-4 flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-anymate-warning" />
                <span>Get Inspired</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sampleTopics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(topic)}
                    className="p-3 text-left bg-anymate-secondary/10 hover:bg-anymate-secondary/20 rounded-lg transition-all duration-300 text-sm text-anymate-dark hover:text-anymate-primary"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Bot, title: "AI-Powered", desc: "Smart storytelling" },
                { icon: BookOpen, title: "Educational", desc: "Learn effectively" },
                { icon: Target, title: "Engaging", desc: "Visual learning" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-xl rounded-xl p-4 text-center shadow-lg border border-white/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-anymate-dark mb-1">{feature.title}</h4>
                  <p className="text-xs text-anymate-gray">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Generated Reel Display */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {currentReel ? (
              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Player */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-anymate-primary to-anymate-secondary">
                  {/* Placeholder for video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <Play className="h-10 w-10" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{currentReel.title}</h3>
                      <p className="text-white/80 text-sm">{currentReel.description}</p>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                        >
                          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={handleLike}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            currentReel.isLiked ? 'bg-red-500' : 'bg-white/20 hover:bg-white/30'
                          }`}
                        >
                          <Heart className={`h-5 w-5 ${currentReel.isLiked ? 'text-white fill-current' : 'text-white'}`} />
                        </button>
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </button>
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                          <Share2 className="h-5 w-5 text-white" />
                        </button>
                        <button
                          onClick={handleBookmark}
                          className={`p-2 rounded-full transition-all duration-300 ${
                            currentReel.isBookmarked ? 'bg-anymate-secondary' : 'bg-white/20 hover:bg-white/30'
                          }`}
                        >
                          <BookOpen className={`h-5 w-5 ${currentReel.isBookmarked ? 'text-white fill-current' : 'text-white'}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reel Info */}
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-anymate-dark mb-2">{currentReel.title}</h3>
                  <p className="text-sm text-anymate-gray mb-3">{currentReel.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-anymate-gray">
                    <div className="flex items-center space-x-4">
                      <span>{currentReel.likes} likes</span>
                      <span>{currentReel.comments} comments</span>
                      <span>{currentReel.shares} shares</span>
                    </div>
                    <span className="text-anymate-primary font-medium">{currentReel.duration}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/30 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-anymate-dark mb-2">Ready to Create?</h3>
                <p className="text-anymate-gray mb-6">
                  Write a topic or concept you'd like to learn about, and we'll generate an engaging Instagram-style reel for you.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-anymate-gray">
                  <Zap className="h-4 w-4" />
                  <span>Powered by Mock AI</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;