import { useReducer, ReactNode } from 'react';
import { GPTContext, GPTReducer } from './GPTContext';
  
interface ProviderProps {
    children: ReactNode;
}

export const GPTProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(GPTReducer, { messageList: [] });
  
    return (
      <GPTContext.Provider value={{ state, dispatch }}>
        {children}
      </GPTContext.Provider>
    );
};