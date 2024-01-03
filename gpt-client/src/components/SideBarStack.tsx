import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from 'antd';
import { FaTrash, FaCog, FaSignOutAlt } from 'react-icons/fa';

export const SideBarStack: React.FC = () => {
  const { dispatch } = useContext(GPTContext);

  const clearConversations = () => {
    dispatch({ type: 'CLEAR_CHAT_HISTORY' });
  };

  const openSettings = () => {
    dispatch({ type: 'SET_ACTIVE_PANE', payload: 'settings' });
  };

  return (
    <div className="sidebar-stack">
        <Button 
          type='text' 
          block={true} 
          icon={<FaTrash/>} 
          onClick={clearConversations}>
          Clear Conversations
        </Button>

        <Button 
          type='text' 
          block={true} 
          icon={<FaCog/>} 
          onClick={openSettings}>
          Settings
        </Button>

        <Button 
          type='text' 
          block={true} 
          icon={<FaSignOutAlt/>}>
          Logout
        </Button>
    </div>
  );
}