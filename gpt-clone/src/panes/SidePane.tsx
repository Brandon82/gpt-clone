import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';
import { Button } from '../components/Button/Button';
import { CollapsingHeader } from '../components/CollapsingHeader/CollapsingHeader';
import { SideBarStack } from '../components/SideBarStack';
import { ChatHistoryList } from '../components/ChatHistoryList';
import { FaPlus } from 'react-icons/fa';


// SidePane Component
export const SidePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  return (
    <div className="sidepane">
      <div className="top-sidepane">
        <h2>GPT-Clone</h2>
        <Button buttonText="New Conversation" icon={<FaPlus />} />
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