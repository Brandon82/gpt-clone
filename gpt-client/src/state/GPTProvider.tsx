import { useReducer, ReactNode } from 'react';
import { GPTContext, GPTReducer } from './GPTContext';
  
interface ProviderProps {
    children: ReactNode;
}

export const GPTProvider = ({ children }: ProviderProps) => {
    const initialState = {
      chatHistory: [],
      pane: 'chat' as const,
      chatIndex: 0,
      model: 'gpt-3.5-turbo' as const
    };

    const [state, dispatch] = useReducer(GPTReducer, initialState);
    return (
      <GPTContext.Provider value={{ state, dispatch }}>
        {children}
      </GPTContext.Provider>
    );
};