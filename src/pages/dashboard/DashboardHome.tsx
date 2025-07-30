import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, BookOpen, ChevronUp, ChevronDown, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { firebaseDb } from '../../services/firebaseDb';
import { GeneratedReel } from '../../types';

const DashboardHome = () => {
  const { user } = useAuth();
  const [videos, setVideos] = useState<GeneratedReel[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      const reels = await firebaseDb.reels.getAll();
      setVideos(reels);
    } catch (error) {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (videoId: string) => {
    try {
      const { likes, isLiked } = await firebaseDb.reels.toggleLike(videoId, user?.id || '1');
      setVideos(prev => prev.map(video =>
        video.id === videoId
          ? { ...video, isLiked, likes }
          : video
      ));
    } catch (error) {
      // handle error
    }
  };

  const handleBookmark = (videoId: string) => {
    setVideos(prev => prev.map(video =>
      video.id === videoId
        ? { ...video, isBookmarked: !video.isBookmarked }
        : video
    ));
  };

  const nextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
      setIsPlaying(false);
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
      setIsPlaying(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      prevVideo();
    } else if (e.key === 'ArrowDown') {
      nextVideo();
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-anymate-light via-white to-anymate-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-anymate-dark">Loading videos...</p>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-anymate-light via-white to-anymate-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-anymate-primary to-anymate-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-anymate-dark mb-2">No Videos Yet</h3>
          <p className="text-anymate-gray">Create your first story to get started!</p>
        </div>
      </div>
    );
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevVideo}
        disabled={currentVideoIndex === 0}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronUp className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextVideo}
        disabled={currentVideoIndex === videos.length - 1}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronDown className="h-6 w-6 text-white" />
      </button>

      {/* Main Video Container */}
      <motion.div
        key={currentVideo.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md aspect-[9/16] bg-gradient-to-br from-anymate-primary to-anymate-secondary rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Play className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{currentVideo.title}</h3>
            <p className="text-white/80 text-sm px-4">{currentVideo.description}</p>
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
                onClick={() => handleLike(currentVideo.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentVideo.isLiked ? 'bg-red-500' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <Heart className={`h-5 w-5 ${currentVideo.isLiked ? 'text-white fill-current' : 'text-white'}`} />
              </button>
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                <MessageCircle className="h-5 w-5 text-white" />
              </button>
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300">
                <Share2 className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={() => handleBookmark(currentVideo.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentVideo.isBookmarked ? 'bg-anymate-secondary' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                <BookOpen className={`h-5 w-5 ${currentVideo.isBookmarked ? 'text-white fill-current' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
            <h3 className="text-white font-semibold text-sm">{currentVideo.title}</h3>
            <p className="text-white/80 text-xs mt-1">{currentVideo.description}</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-16 left-4 right-4">
          <div className="flex justify-center space-x-1">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Video Counter */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
        <span className="text-white text-sm">
          {currentVideoIndex + 1} / {videos.length}
        </span>
      </div>

      {/* Keyboard Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
        <span className="text-white/80 text-xs">
          ↑↓ to navigate, Space to play/pause
        </span>
      </div>
    </div>
  );
};

export default DashboardHome;