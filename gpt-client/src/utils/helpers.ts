import { IConversation, IMessage } from '@state/GPTContext';
import config from '@config';

const getCurrentConversation = (chatHistory: IConversation[], chatIndex: number): IMessage[] => {
  return chatHistory[chatIndex]?.messages || [];
};

export const isEmptyMessage = (chatHistory: IConversation[], chatIndex: number): boolean => {
  return chatHistory.length === 0 || getCurrentConversation(chatHistory, chatIndex).length === 0;
};

export const sendChatRequestToServer = async (message: string, model: string, maxTokens: number): Promise<IMessage | null> => {
  try {
    const res = await fetch(`http://localhost:${config.config['server-port']}/v1/chat/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
        max_tokens: maxTokens,
        engine: model
      })
    });

    if (res.status === 200) {
      const data = await res.json();
      const modelMessage: IMessage = {
        text: data.message,
        source: 'model',
        type: 'chat'
      };
      return modelMessage;
    } else {
      throw new Error('Failed to fetch data from server');
    }
  } catch (error) {
    throw error;
  }
};

export const sendImageRequestToServer = async (message: string, imgSize: string, numImages: number, imageModel: string): Promise<IMessage | null> => {
  try {
    const res = await fetch(`http://localhost:${config.config['server-port']}/v1/image/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
        model: imageModel,
        image_size: imgSize,
        num_images: numImages
      })
    });

    if (res.status === 200) {
      const data = await res.json();
      const modelMessage: IMessage = {
        text: data.url,
        source: 'model',
        type: 'image'
      };
      return modelMessage;
    } else {
      throw new Error('Failed to fetch data from server');
    }
  } catch (error) {
    throw error;
  }
};