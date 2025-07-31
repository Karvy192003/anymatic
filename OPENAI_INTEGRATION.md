# OpenAI Integration for Anymate

## Overview

This document provides detailed information about the OpenAI API integration implemented in the Anymate application. The integration enables AI-powered features such as educational content generation, quiz creation, personalized learning paths, and story-based explanations.

## Setup

### Environment Variables

The OpenAI integration requires several environment variables to be set in your `.env` file:

```
# OpenAI API Configuration
VITE_OPENAI_API_KEY=your-openai-api-key
VITE_OPENAI_MODEL=gpt-3.5-turbo
VITE_OPENAI_TEMPERATURE=0.7
VITE_OPENAI_MAX_TOKENS=1000
VITE_OPENAI_API_BASE_URL=https://api.openai.com/v1
```

A sample configuration file (`sample.env`) has been provided with placeholder values. Copy these to your `.env` file and replace with your actual OpenAI API key.

### API Key Security

**Important:** Never commit your actual API key to version control. The `.env` file should be included in your `.gitignore` file to prevent accidental exposure of sensitive credentials.

## Service Implementation

The OpenAI integration is implemented in `src/services/openaiService.ts`. This service provides:

1. Type definitions for OpenAI API requests and responses
2. Core API communication functions
3. Specialized educational content generation functions

### Core Functions

#### Text Completion

```typescript
generateCompletion(request: OpenAICompletionRequest): Promise<OpenAICompletionResponse>
```

Generates text completions using OpenAI's completion API.

#### Chat Completion

```typescript
generateChatCompletion(request: OpenAIChatRequest): Promise<OpenAIChatResponse>
```

Generates chat completions using OpenAI's chat API, which is more suitable for conversational interactions.

### Educational Content Functions

#### Generate Educational Content

```typescript
generateEducationalContent(topic: string, grade: string): Promise<string>
```

Generates age-appropriate educational content for a specific topic and grade level.

#### Generate Quiz Questions

```typescript
generateQuizQuestions(topic: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 5): Promise<string>
```

Generates multiple-choice quiz questions for a specific topic with the specified difficulty level.

#### Generate Learning Path

```typescript
generateLearningPath(subject: string, startLevel: string, targetLevel: string): Promise<string>
```

Creates a personalized learning path for a subject, starting from a specific knowledge level and targeting a desired proficiency level.

#### Generate Story-Based Explanation

```typescript
generateStoryBasedExplanation(concept: string, ageGroup: string): Promise<string>
```

Creates a story that explains a complex concept in an engaging way appropriate for the specified age group.

## Usage Examples

### Basic Usage in a Component

```typescript
import { generateEducationalContent } from '../services/openaiService';
import { useState } from 'react';

const LearningComponent = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateContent = async () => {
    setLoading(true);
    setError('');
    try {
      const generatedContent = await generateEducationalContent('Photosynthesis', '8th');
      setContent(generatedContent);
    } catch (error) {
      setError('Failed to generate content: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateContent} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
      {error && <div className="error">{error}</div>}
      <div className="content">{content}</div>
    </div>
  );
};
```

### Creating a Quiz

```typescript
import { generateQuizQuestions } from '../services/openaiService';

// In your component
const handleCreateQuiz = async () => {
  try {
    const quizContent = await generateQuizQuestions('Solar System', 'medium', 10);
    // Process and display the quiz
  } catch (error) {
    console.error('Error creating quiz:', error);
  }
};
```

## Error Handling

The OpenAI service includes error handling for common issues:

1. Missing API key
2. Network errors
3. API response errors

When using these functions, always wrap calls in try/catch blocks to handle potential errors gracefully.

## Rate Limiting and Costs

Be aware that OpenAI API usage incurs costs based on the number of tokens processed. Implement appropriate rate limiting and monitoring to control costs:

1. Set appropriate token limits in your requests
2. Cache responses when possible
3. Implement user quotas if needed
4. Monitor API usage regularly

## Future Improvements

Potential enhancements to consider:

1. Implement caching for common requests
2. Add retry logic for transient errors
3. Create a more robust error handling system
4. Add support for streaming responses
5. Implement a fallback mechanism for when the API is unavailable