import React from 'react';

type PaneType = 'chat' | 'settings';
export type ModelType = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4-32k' | 'gpt-3.5-turbo-16k';

export interface IMessage {
  text: string | undefined;
  source: 'user' | 'model';
}

interface IState {
  chatHistory: IMessage[][];
  chatIndex: number;
  pane: PaneType;
  model: ModelType;
}

interface IAction {
  type: 
    | 'ADD_TO_HISTORY'
    | 'ADD_TO_HISTORY_AT_INDEX'
    | 'CLEAR_HISTORY'
    | 'SET_CHAT_INDEX'
    | 'SET_PANE'
    | 'SET_MODEL';
  payload?: IMessage | IMessage[] | PaneType | number | string | ModelType;
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
            chatHistory: [...state.chatHistory, action.payload as IMessage[]]  
          }
          case 'ADD_TO_HISTORY_AT_INDEX':
            if (typeof action.index === 'number' && action.payload && action.index >= 0) {
              const updatedChatHistory = [...state.chatHistory];
              const lastIndex = updatedChatHistory[action.index] ? updatedChatHistory[action.index].length - 1 : -1;
          
              if (
                typeof action.payload === 'object' && 
                'text' in action.payload && 
                'source' in action.payload
              ) {
                // Check if the last message at the index is the same as the new message
                if (
                  lastIndex === -1 || 
                  updatedChatHistory[action.index][lastIndex].text !== action.payload.text || 
                  updatedChatHistory[action.index][lastIndex].source !== action.payload.source
                ) {
                  if (updatedChatHistory[action.index]) {
                    updatedChatHistory[action.index].push(action.payload);
                  } else {
                    updatedChatHistory[action.index] = [action.payload];
                  }
                  return {
                    ...state,
                    chatHistory: updatedChatHistory
                  };
                }
              }
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
        default:
          return state;
    }
};

