import React, { useContext } from 'react';
import { GPTContext, IConversation } from '@state/GPTContext';
import { Button } from 'antd';
import { CollapsingHeader } from '@components/CollapsingHeader/CollapsingHeader';
import { SideBarStack } from '@components/SideBarStack';
import { ChatHistoryList } from '@components/ChatHistoryList';

// SidePane Component
export const SidePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const startNewConversation = () => {
    const newConversation: IConversation = {
      messages: [],
      appType: state.appType
    };
    dispatch({ type: 'ADD_CHAT_CONVERSATION_TO_HISTORY', payload: newConversation });
    
    const newIndex = Math.max(0, state.chatHistory.length);
    dispatch({ type: 'SET_CHAT_INDEX', payload: newIndex });
  }
  
  return (
    <div className="sidepane">
      <div className="top-sidepane">
        <h2>GPT-Clone</h2>
        <Button type="primary" block onClick={startNewConversation}>New Chat</Button>
        <CollapsingHeader title="History" isCollapsed={false}>
          <ChatHistoryList/>
        </CollapsingHeader>
      </div>
      <div>
        <SideBarStack/>
      </div>
    </div>
  );
}
