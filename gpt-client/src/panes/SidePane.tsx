import React, { useContext } from 'react';
import { GPTContext, IConversation } from '@state/GPTContext';
import { Button } from '@components/Button/Button';
import { CollapsingHeader } from '@components/CollapsingHeader/CollapsingHeader';
import { SideBarStack } from '@components/SideBarStack';
import { ChatHistoryList } from '@components/ChatHistoryList';
import { FaPlus } from 'react-icons/fa';

// SidePane Component
export const SidePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const startNewConversation = () => {
    const newConversation: IConversation = {
      messages: [],
      appType: state.appType
    };
    dispatch({ type: 'ADD_TO_HISTORY', payload: newConversation });
    
    const newIndex = Math.max(0, state.chatHistory.length - 1);
    dispatch({ type: 'SET_CHAT_INDEX', payload: newIndex });
  }

  const getButtonText = () => {
    return state.appType === 'chat' ? 'New Chat' : state.appType === 'image' ? 'New Image' : 'New Conversation';
  }

  return (
    <div className="sidepane">
      <div className="top-sidepane">
        <h2>GPT-Clone</h2>
        <Button buttonText={getButtonText()} icon={<FaPlus />} onClick={startNewConversation} />
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
