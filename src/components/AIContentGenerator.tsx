import { useState } from 'react';
import { generateEducationalContent, generateQuizQuestions, generateStoryBasedExplanation } from '../services/openaiService';

/**
 * AIContentGenerator Component
 * 
 * This component demonstrates how to use the OpenAI integration
 * to generate different types of educational content.
 */
const AIContentGenerator = () => {
  // State for form inputs
  const [topic, setTopic] = useState('');
  const [grade, setGrade] = useState('5th');
  const [contentType, setContentType] = useState('educational');
  const [difficulty, setDifficulty] = useState('medium');
  const [ageGroup, setAgeGroup] = useState('8-10');
  
  // State for generated content
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Handle form submission to generate content
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic) {
      setError('Please enter a topic');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      let content = '';
      
      switch (contentType) {
        case 'educational':
          content = await generateEducationalContent(topic, grade);
          break;
        case 'quiz':
          content = await generateQuizQuestions(topic, difficulty as 'easy' | 'medium' | 'hard');
          break;
        case 'story':
          content = await generateStoryBasedExplanation(topic, ageGroup);
          break;
        default:
          content = await generateEducationalContent(topic, grade);
      }
      
      setGeneratedContent(content);
    } catch (err) {
      setError(`Error generating content: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Content Generator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-1">
            Content Type
          </label>
          <select
            id="contentType"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="educational">Educational Content</option>
            <option value="quiz">Quiz Questions</option>
            <option value="story">Story-Based Explanation</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
            Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Photosynthesis, Solar System, Fractions"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        
        {contentType === 'educational' && (
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
              Grade Level
            </label>
            <select
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="3rd">3rd Grade</option>
              <option value="4th">4th Grade</option>
              <option value="5th">5th Grade</option>
              <option value="6th">6th Grade</option>
              <option value="7th">7th Grade</option>
              <option value="8th">8th Grade</option>
              <option value="9th">9th Grade</option>
              <option value="10th">10th Grade</option>
              <option value="11th">11th Grade</option>
              <option value="12th">12th Grade</option>
            </select>
          </div>
        )}
        
        {contentType === 'quiz' && (
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty Level
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        )}
        
        {contentType === 'story' && (
          <div>
            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">
              Age Group
            </label>
            <select
              id="ageGroup"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="5-7">5-7 years</option>
              <option value="8-10">8-10 years</option>
              <option value="11-13">11-13 years</option>
              <option value="14-16">14-16 years</option>
            </select>
          </div>
        )}
        
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
          >
            {isLoading ? 'Generating...' : 'Generate Content'}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {generatedContent && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Generated Content:</h3>
          <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
            {generatedContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIContentGenerator;