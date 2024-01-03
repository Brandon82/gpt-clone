import { useReducer, ReactNode, useEffect } from 'react';
import { GPTContext, GPTReducer, AppType, ChatModelType, ImageModelType, PaneType } from './GPTContext';
  
interface ProviderProps {
    children: ReactNode;
}

export const GPTProvider = ({ children }: ProviderProps) => {
    const initialState = {
      appType: (sessionStorage.getItem('appType') || 'chat') as AppType,
      activePane: 'chat' as PaneType,
      chatHistory: JSON.parse(sessionStorage.getItem('chatHistory') || '[]'),
      chatIndex: Number(sessionStorage.getItem('chatIndex')) || 0,
      chatModel: 'gpt-4-1106-preview' as ChatModelType,
      imageModel: 'dall-e-3' as ImageModelType,
      maxTokens: 2000,
      chatInstruction: '' as const,
    };

    const [state, dispatch] = useReducer(GPTReducer, initialState);

    useEffect(() => {
      sessionStorage.setItem('chatHistory', JSON.stringify(state.chatHistory));
    }, [state.chatHistory]);

    useEffect(() => {
      sessionStorage.setItem('chatIndex', state.chatIndex.toString());
    }, [state.chatIndex]);

    useEffect(() => {
      sessionStorage.setItem('appType', state.appType);
    }, [state.appType]);

    return (
      <GPTContext.Provider value={{ state, dispatch }}>
        {children}
      </GPTContext.Provider>
    );
};