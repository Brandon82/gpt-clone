import React from 'react';

type appType = 'chat' | 'image';
type PaneType = 'chat' | 'image' | 'settings';
export type ModelType = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4-32k' | 'gpt-3.5-turbo-16k';

export interface IMessage {
  text: string | undefined;
  source: 'user' | 'model';
  type: 'chat' | 'image';
}

export interface IConversation {
  messages: IMessage[];
  appType: appType;
}

interface IState {
  chatHistory: IConversation[];
  chatIndex: number;
  pane: PaneType;
  model: ModelType;
  appType: appType;
}

interface IAction {
  type:
  | 'ADD_TO_HISTORY'
  | 'ADD_TO_HISTORY_AT_INDEX'
  | 'CLEAR_HISTORY'
  | 'SET_CHAT_INDEX'
  | 'SET_PANE'
  | 'SET_MODEL'
  | 'SET_APP_TYPE';
  payload?: IMessage | IConversation | PaneType | number | string | ModelType | appType;  
  index?: number;
}

interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export const GPTContext = React.createContext({} as IContextProps);

export const GPTReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload as IConversation]
      }
    case 'ADD_TO_HISTORY_AT_INDEX':
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
    case 'CLEAR_HISTORY':  
      return {
        ...state,
        chatHistory: []
      }
    case 'SET_CHAT_INDEX':
      if (typeof action.payload === "number") {
        return { ...state, chatIndex: action.payload };
      }
      return { ...state };
    case 'SET_PANE':
      return {
        ...state,
        pane: action.payload as PaneType
      }
    case 'SET_MODEL':
      if (typeof action.payload === "string") {
        return { ...state, model: action.payload as ModelType };
      }
      return { ...state };
    case 'SET_APP_TYPE':
      if (typeof action.payload === "string") {
        return { ...state, appType: action.payload as appType };
      }
      return { ...state };
    default:
      return state;
    }
};