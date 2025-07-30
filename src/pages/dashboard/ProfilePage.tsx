import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Camera, Save, Settings, Moon, Sun, Globe, Award, Calendar, TrendingUp } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    mobile: '+1 (555) 123-4567',
    username: 'sarah_learns',
    bio: 'Passionate learner exploring AI, web development, and data science through engaging stories.',
    language: 'English',
    joinDate: '2024-01-01',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  });

  const [stats] = useState({
    videosWatched: 47,
    hoursLearned: 23.5,
    topicsCompleted: 12,
    currentStreak: 7,
    totalPoints: 2480,
    badges: 8
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Completed your first story', icon: '🚀', earned: true },
    { id: 2, title: 'Week Warrior', description: '7-day learning streak', icon: '🔥', earned: true },
    { id: 3, title: 'Story Master', description: 'Watched 25 stories', icon: '📚', earned: true },
    { id: 4, title: 'Time Keeper', description: '20+ hours of learning', icon: '⏰', earned: true },
    { id: 5, title: 'Explorer', description: 'Tried 5 different topics', icon: '🌟', earned: true },
    { id: 6, title: 'Knowledge Seeker', description: 'Completed 10 topics', icon: '🎯', earned: true },
    { id: 7, title: 'Month Champion', description: '30-day learning streak', icon: '👑', earned: false },
    { id: 8, title: 'Master Learner', description: 'Watched 100 stories', icon: '💎', earned: false }
  ];

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
            <h1 className="text-4xl font-bold text-[#2D2D2D] mb-2">Profile</h1>
            <p className="text-lg text-gray-600">Manage your account and learning preferences</p>
          </div>
          
          <motion.button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              isEditing 
                ? 'bg-[#7AE582] text-white hover:bg-[#7AE582]/90' 
                : 'bg-[#3A86FF] text-white hover:bg-[#3A86FF]/90'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Avatar and Basic Info */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30">
            <div className="flex items-start space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                {isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#3A86FF] text-white rounded-full flex items-center justify-center"
                  >
                    <Camera className="h-4 w-4" />
                  </motion.button>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#3A86FF] focus:outline-none"
                      />
                    ) : (
                      <p className="text-[#2D2D2D] font-medium">{profileData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="username"
                        value={profileData.username}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#3A86FF] focus:outline-none"
                      />
                    ) : (
                      <p className="text-gray-600">@{profileData.username}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#3A86FF] focus:outline-none resize-none"
                    />
                  ) : (
                    <p className="text-gray-600">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-[#3A86FF] focus:outline-none"
                      />
                    ) : (
                      <span className="text-gray-600">{profileData.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    {isEditing ? (
                      <input
                        type="tel"
                        name="mobile"
                        value={profileData.mobile}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-[#3A86FF] focus:outline-none"
                      />
                    ) : (
                      <span className="text-gray-600">{profileData.mobile}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Language
                  </label>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    {isEditing ? (
                      <select
                        name="language"
                        value={profileData.language}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-[#3A86FF] focus:outline-none"
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                      </select>
                    ) : (
                      <span className="text-gray-600">{profileData.language}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Member Since
                  </label>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">
                      {new Date(profileData.joinDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end mt-6">
                <motion.button
                  onClick={handleSave}
                  className="px-6 py-2 bg-[#7AE582] text-white font-medium rounded-lg hover:bg-[#7AE582]/90 transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </motion.button>
              </div>
            )}
          </div>

          {/* Preferences */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {isDarkMode ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Dark Mode</p>
                    <p className="text-sm text-gray-600">Toggle dark theme</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                    isDarkMode ? 'bg-[#3A86FF]' : 'bg-gray-300'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    layout
                    className="w-5 h-5 bg-white rounded-full shadow-sm"
                    animate={{ x: isDarkMode ? 26 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive learning reminders</p>
                  </div>
                </div>
                <motion.button
                  className="w-12 h-6 bg-[#3A86FF] rounded-full"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-5 h-5 bg-white rounded-full shadow-sm"
                    animate={{ x: 26 }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats and Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Learning Stats */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-[#3A86FF]" />
              <span>Learning Stats</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Videos', value: stats.videosWatched, color: 'from-[#3A86FF] to-[#A259FF]' },
                { label: 'Hours', value: stats.hoursLearned, color: 'from-[#7AE582] to-[#3A86FF]' },
                { label: 'Topics', value: stats.topicsCompleted, color: 'from-[#FFD166] to-[#FF5CA8]' },
                { label: 'Streak', value: `${stats.currentStreak}d`, color: 'from-[#FF5CA8] to-[#A259FF]' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="text-2xl font-bold text-[#2D2D2D]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-[#3A86FF]/10 to-[#A259FF]/10 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-[#3A86FF]" />
                  <span className="font-medium text-[#2D2D2D]">Total Points</span>
                </div>
                <span className="text-2xl font-bold text-[#3A86FF]">{stats.totalPoints.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 flex items-center justify-between">
              <span>Achievements</span>
              <span className="text-sm text-gray-600">{achievements.filter(a => a.earned).length}/{achievements.length}</span>
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    achievement.earned
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium text-[#2D2D2D] mb-1">{achievement.title}</div>
                    <div className="text-xs text-gray-600">{achievement.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;