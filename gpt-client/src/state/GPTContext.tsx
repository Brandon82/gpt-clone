import React from 'react';

export type AppType = 'chat' | 'image';
export type PaneType = 'chat' | 'image' | 'settings';
export type ChatModelType = 'gpt-3.5-turbo-1106' | 'gpt-3.5-turbo-16k' | 'gpt-4' | 'gpt-4-32k' | 'gpt-4-1106-preview' | 'gpt-4-vision-preview';
export type ImageModelType = 'dall-e-2' | 'dall-e-3';

export interface IMessage {
  text: string | undefined;
  source: 'user' | 'model';
  type: 'chat' | 'image';
}

export interface IConversation {
  messages: IMessage[];
  appType: AppType;
}

interface IState {
  appType: AppType;
  activePane: PaneType;
  chatHistory: IConversation[];
  chatIndex: number;
  chatModel: ChatModelType;
  imageModel: ImageModelType;
  maxTokens: number;
  chatInstruction: string;
}

interface IAction {
  type:
  | 'SET_APP_TYPE'
  | 'SET_ACTIVE_PANE'

  | 'ADD_TO_CHAT_HISTORY_AT_INDEX'
  | 'ADD_CHAT_CONVERSATION_TO_HISTORY'
  | 'SET_CHAT_INDEX'
  | 'CLEAR_CHAT_HISTORY'

  | 'SET_CHAT_MODEL'
  | 'SET_IMAGE_MODEL'
  | 'SET_MAX_TOKENS'
  | 'SET_CHAT_INSTRUCTION';
  payload?: IMessage | IConversation | PaneType | number | string | ChatModelType | ImageModelType | AppType;  
  index?: number;
}

interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export const GPTContext = React.createContext({} as IContextProps);

export const GPTReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'ADD_CHAT_CONVERSATION_TO_HISTORY':
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload as IConversation]
      }
    case 'ADD_TO_CHAT_HISTORY_AT_INDEX':
      if (typeof action.index === 'number' && action.payload && action.index >= 0) {
        const updatedChatHistory = [...state.chatHistory];
        const currentConversation = updatedChatHistory[action.index];
        if (currentConversation) {
          if (typeof action.payload === 'object' && 'text' in action.payload && 'source' in action.payload) {
            const lastMessage = currentConversation.messages[currentConversation.messages.length - 1];
            if (!lastMessage || lastMessage.text !== action.payload.text || lastMessage.source !== action.payload.source) {
              currentConversation.messages.push(action.payload);
            }
          }
        } else {
          updatedChatHistory[action.index] = {
            messages: [action.payload as IMessage], 
            appType: state.appType 
          };
        }
        return {
          ...state,
          chatHistory: updatedChatHistory
        };
      }
      return { ...state };   
    case 'CLEAR_CHAT_HISTORY':  
      return {
        ...state,
        chatHistory: []
      }
    case 'SET_CHAT_INDEX':
      if (typeof action.payload === "number") {
        return { ...state, chatIndex: action.payload };
      }
      return { ...state };
    case 'SET_ACTIVE_PANE':
      return {
        ...state,
        activePane: action.payload as PaneType
      }
    case 'SET_CHAT_MODEL':
      if (typeof action.payload === "string") {
        return { ...state, chatModel: action.payload as ChatModelType };
      }
      return { ...state };
    case 'SET_IMAGE_MODEL':
      if (typeof action.payload === "string") {
        return { ...state, imageModel: action.payload as ImageModelType };
      }
      return { ...state };
    case 'SET_APP_TYPE':
      if (typeof action.payload === "string") {
        return { ...state, appType: action.payload as AppType };
      }
      return { ...state };
    case 'SET_MAX_TOKENS':
      if (typeof action.payload === "number") {
        return { ...state, maxTokens: action.payload };
      }
      return { ...state };
    case 'SET_CHAT_INSTRUCTION':
      if (typeof action.payload === "string") {
        return { ...state, chatInstruction: action.payload };
      }
      return { ...state };
    default:
      return state;
  }
};