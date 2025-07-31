/**
 * OpenAI Service for LLM Integration
 * This service handles communication with OpenAI's API for various LLM features
 */

// Types for OpenAI API requests and responses
export interface OpenAICompletionRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
  model?: string;
}

export interface OpenAICompletionResponse {
  text: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface OpenAIChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenAIChatRequest {
  messages: OpenAIChatMessage[];
  maxTokens?: number;
  temperature?: number;
  model?: string;
}

export interface OpenAIChatResponse {
  message: OpenAIChatMessage;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// Default configuration from environment variables
const DEFAULT_MODEL = import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo';
const DEFAULT_TEMPERATURE = parseFloat(import.meta.env.VITE_OPENAI_TEMPERATURE || '0.7');
const DEFAULT_MAX_TOKENS = parseInt(import.meta.env.VITE_OPENAI_MAX_TOKENS || '1000', 10);
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_BASE_URL = import.meta.env.VITE_OPENAI_API_BASE_URL || 'https://api.openai.com/v1';

/**
 * Generate text completion using OpenAI's API
 */
export async function generateCompletion(
  request: OpenAICompletionRequest
): Promise<OpenAICompletionResponse> {
  if (!API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  const response = await fetch(`${API_BASE_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: request.prompt,
      max_tokens: request.maxTokens || DEFAULT_MAX_TOKENS,
      temperature: request.temperature || DEFAULT_TEMPERATURE,
      model: request.model || DEFAULT_MODEL
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  
  return {
    text: data.choices[0].text,
    usage: {
      promptTokens: data.usage.prompt_tokens,
      completionTokens: data.usage.completion_tokens,
      totalTokens: data.usage.total_tokens
    }
  };
}

/**
 * Generate chat completion using OpenAI's API
 */
export async function generateChatCompletion(
  request: OpenAIChatRequest
): Promise<OpenAIChatResponse> {
  if (!API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  const response = await fetch(`${API_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      messages: request.messages,
      max_tokens: request.maxTokens || DEFAULT_MAX_TOKENS,
      temperature: request.temperature || DEFAULT_TEMPERATURE,
      model: request.model || DEFAULT_MODEL
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  
  return {
    message: data.choices[0].message,
    usage: {
      promptTokens: data.usage.prompt_tokens,
      completionTokens: data.usage.completion_tokens,
      totalTokens: data.usage.total_tokens
    }
  };
}

/**
 * Generate educational content for a specific topic
 */
export async function generateEducationalContent(topic: string, grade: string): Promise<string> {
  const systemPrompt = `You are an educational content creator specializing in creating engaging, 
  age-appropriate educational content for students. Create content for the following topic 
  that is suitable for ${grade} grade students.`;
  
  const response = await generateChatCompletion({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Create educational content about: ${topic}` }
    ]
  });
  
  return response.message.content;
}

/**
 * Generate quiz questions for a specific topic
 */
export async function generateQuizQuestions(topic: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 5): Promise<string> {
  const systemPrompt = `You are an educational quiz creator specializing in creating engaging, 
  accurate quiz questions. Create ${count} multiple-choice questions about the following topic 
  with ${difficulty} difficulty level. Format each question with 4 options and indicate the correct answer.`;
  
  const response = await generateChatCompletion({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Create quiz questions about: ${topic}` }
    ]
  });
  
  return response.message.content;
}

/**
 * Generate a learning path for a specific subject
 */
export async function generateLearningPath(subject: string, startLevel: string, targetLevel: string): Promise<string> {
  const systemPrompt = `You are an educational curriculum designer specializing in creating 
  personalized learning paths. Create a step-by-step learning path for the following subject, 
  starting from ${startLevel} knowledge level and targeting ${targetLevel} proficiency.`;
  
  const response = await generateChatCompletion({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Create a learning path for: ${subject}` }
    ]
  });
  
  return response.message.content;
}

/**
 * Generate a story-based explanation for a concept
 */
export async function generateStoryBasedExplanation(concept: string, ageGroup: string): Promise<string> {
  const systemPrompt = `You are an educational storyteller specializing in explaining complex concepts 
  through engaging stories. Create a story that explains the following concept in a way that's 
  understandable and engaging for ${ageGroup} age group.`;
  
  const response = await generateChatCompletion({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Create a story that explains: ${concept}` }
    ]
  });
  
  return response.message.content;
}