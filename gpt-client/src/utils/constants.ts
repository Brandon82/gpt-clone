export const WELCOME_TEXT_CHAT = 'Welcome to GPT-Clone! I am your AI assistant. I am here to be helpful in any way I can. Feel free to chat with me by typing below.';

export const WELCOME_TEXT_IMAGE = 'Welcome to GPT-Clone Image Generator! Please enter a description and I will generate images for you.';

export const APP_TYPE_OPTIONS = [
  { value: 'chat', name: 'Chat' },
  { value: 'image', name: 'Image' }
];

export const CHAT_MODEL_OPTIONS = [
  { value: 'gpt-3.5-turbo-1106', label: 'GPT-3.5 Turbo' },
  { value: 'gpt-3.5-turbo-16k', label: 'GPT-3.5 16k' },
  { value: 'gpt-4', label: 'GPT-4' },
  { value: 'gpt-4-32k', label: 'GPT-4 32k' },
  { value: 'gpt-4-1106-preview', label: 'GPT-4 Turbo' },
  { value: 'gpt-4-vision-preview', label: 'GPT-4 Vision' },
];
  
export const IMAGE_MODEL_OPTIONS = [
  { value: 'dall-e-3', label: 'DALL·E 3' },
  { value: 'dall-e-2', label: 'DALL·E 2' },
];

export const D3_IMAGE_SIZES = [
  { value: '1024x1024', label: '1024x1024' },
  { value: '1024x1792', label: '1024x1792' },
  { value: '1792x1024', label: '1792x1024' },
];

export const D2_IMAGE_SIZES = [
  { value: '1024x1024', label: '1024x1024' },
  { value: '512x512', label: '512x512' },
  { value: '256x256', label: '256x256' },
];