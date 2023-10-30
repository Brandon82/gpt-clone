import { useReducer, ReactNode } from 'react';
import { GPTContext, GPTReducer } from './GPTContext';
  
interface ProviderProps {
    children: ReactNode;
}

export const GPTProvider = ({ children }: ProviderProps) => {
    const initialState = {
      chatHistory: [],
      imageHistory: [],
      pane: 'chat' as const,
      chatIndex: 0,
      imageIndex: 0,
      model: 'gpt-3.5-turbo' as const,
      appType: 'chat' as const,
      maxTokens: 2000
    };

    const [state, dispatch] = useReducer(GPTReducer, initialState);
    return (
      <GPTContext.Provider value={{ state, dispatch }}>
        {children}
      </GPTContext.Provider>
    );
};