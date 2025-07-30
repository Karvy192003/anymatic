import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Trash2, Clock, Eye, Grid, List, Search, Filter, Bookmark } from 'lucide-react';

const SavedPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const savedVideos = [
    {
      id: 1,
      title: "Linux File Permissions: The Bottle Sharing Story",
      description: "Understanding file permissions through a relatable bottle-sharing metaphor",
      thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "8:45",
      category: "Linux",
      difficulty: "Beginner",
      savedDate: "2024-01-15",
      views: 0,
      isCompleted: false
    },
    {
      id: 2,
      title: "React Hooks Explained",
      description: "Kitchen cooking analogy for React state management",
      thumbnail: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "12:30",
      category: "React",
      difficulty: "Intermediate",
      savedDate: "2024-01-14",
      views: 1,
      isCompleted: true
    },
    {
      id: 3,
      title: "Database Relationships",
      description: "Library organization metaphor for understanding SQL joins",
      thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "15:20",
      category: "Database",
      difficulty: "Advanced",
      savedDate: "2024-01-13",
      views: 2,
      isCompleted: true
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description: "Detective story approach to learning AI fundamentals",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "18:45",
      category: "AI & ML",
      difficulty: "Beginner",
      savedDate: "2024-01-12",
      views: 0,
      isCompleted: false
    },
    {
      id: 5,
      title: "Blockchain Technology",
      description: "Village market story for understanding distributed ledgers",
      thumbnail: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      duration: "22:15",
      category: "Blockchain",
      difficulty: "Advanced",
      savedDate: "2024-01-11",
      views: 3,
      isCompleted: true
    }
  ];

  const categories = ['all', 'Linux', 'React', 'Database', 'AI & ML', 'Blockchain'];

  const filteredVideos = savedVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || video.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-[#7AE582] bg-[#7AE582]/10';
      case 'Intermediate': return 'text-[#FFD166] bg-[#FFD166]/10';
      case 'Advanced': return 'text-[#FF5CA8] bg-[#FF5CA8]/10';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#2D2D2D] mb-2">
              Saved Content
            </h1>
            <p className="text-lg text-gray-600">
              Your bookmarked stories and learning materials
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-[#3A86FF] text-white' 
                  : 'bg-white/70 text-gray-600 hover:text-[#3A86FF]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-[#3A86FF] text-white' 
                  : 'bg-white/70 text-gray-600 hover:text-[#3A86FF]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <List className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search saved content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl focus:border-[#3A86FF] focus:outline-none transition-colors duration-300"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl focus:border-[#3A86FF] focus:outline-none transition-colors duration-300 appearance-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filteredVideos.length === 0 ? (
          <div className="bg-white/70 backdrop-blur-xl p-12 rounded-2xl shadow-lg border border-white/30 text-center">
                            <Bookmark className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">No saved content found</h3>
            <p className="text-gray-600">
              {searchTerm || filterCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria' 
                : 'Start saving your favorite learning content to see it here'}
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Play className="h-6 w-6 text-[#3A86FF] ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Completion Badge */}
                  {video.isCompleted && (
                    <div className="absolute top-3 left-3 bg-[#7AE582] text-white px-2 py-1 rounded-lg text-xs font-medium">
                      Completed
                    </div>
                  )}

                  {/* Delete Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 right-3 w-8 h-8 bg-red-500/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#3A86FF] bg-[#3A86FF]/10 px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(video.difficulty)}`}>
                      {video.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2 group-hover:text-[#3A86FF] transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Saved {formatDate(video.savedDate)}</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{video.views} views</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-24 h-16 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-[#2D2D2D] group-hover:text-[#3A86FF] transition-colors duration-300">
                            {video.title}
                          </h3>
                          {video.isCompleted && (
                            <span className="bg-[#7AE582] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                              Completed
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2">
                          {video.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{video.duration}</span>
                          </div>
                          
                          <span className={`px-2 py-1 rounded-full ${getDifficultyColor(video.difficulty)}`}>
                            {video.difficulty}
                          </span>
                          
                          <span>Saved {formatDate(video.savedDate)}</span>
                          
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{video.views} views</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-[#3A86FF] hover:bg-[#3A86FF]/10 rounded-lg transition-colors duration-300"
                        >
                          <Play className="h-5 w-5" />
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-300"
                        >
                          <Trash2 className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SavedPage;