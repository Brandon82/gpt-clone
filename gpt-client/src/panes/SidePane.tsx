import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from '@components/Button/Button';
import { CollapsingHeader } from '@components/CollapsingHeader/CollapsingHeader';
import { SideBarStack } from '@components/SideBarStack';
import { ChatHistoryList } from '@components/ChatHistoryList';
import { FaPlus } from 'react-icons/fa';


// SidePane Component
export const SidePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const startNewConversation = () => {
      dispatch({ type: 'ADD_TO_HISTORY', payload: [] });

      const newIndex = Math.max(0, state.chatHistory.length - 1);
      dispatch({ type: 'SET_CHAT_INDEX', payload: newIndex });
  }

  return (
    <div className="sidepane">
      <div className="top-sidepane">
        <h2>GPT-Clone</h2>
        <Button buttonText="New Conversation" icon={<FaPlus />} onClick={startNewConversation} />
        <CollapsingHeader title="Chat History" isCollapsed={false}>
          <ChatHistoryList/>
        </CollapsingHeader>
      </div>
      <div>
        <SideBarStack/>
      </div>
    </div>
  );
}