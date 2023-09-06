import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from '@components/Button/Button';
import { FaTrash, FaCog, FaSignOutAlt } from 'react-icons/fa';

// SideBarStack Component
export const SideBarStack: React.FC = () => {
  const { dispatch } = useContext(GPTContext);

  const iconStyle = { color: '#00BFFF' };

  const clearConversations = () => {
    dispatch({ type: 'CLEAR_HISTORY' });
  };

  const openSettings = () => {
    dispatch({ type: 'SET_PANE', payload: 'settings' });
  };

  return (
    <div className="sidebar-stack">
      <Button 
        buttonText="Clear Conversations" 
        className='button transparent-button' 
        icon={<FaTrash style={iconStyle} />}
        onClick={clearConversations}
      />
      <Button 
        buttonText="Settings" 
        className='button transparent-button'
        icon={<FaCog style={iconStyle} />}
        onClick={openSettings}
      />
      <Button 
        buttonText="Logout" 
        className='button transparent-button'
        icon={<FaSignOutAlt style={iconStyle} />}
      />
    </div>
  );
}