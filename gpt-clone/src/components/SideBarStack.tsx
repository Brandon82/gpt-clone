import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';
import { Button } from '../components/Button/Button';
import { FaTrash, FaCog, FaSignOutAlt } from 'react-icons/fa';

// SideBarStack Component
export const SideBarStack: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const iconStyle = { color: '#00BFFF' };

  return (
    <div className="sidebar-stack">
      <Button 
        buttonText="Clear Conversations" 
        className='button transparent-button' 
        icon={<FaTrash style={iconStyle} />}
      />
      <Button 
        buttonText="Settings" 
        className='button transparent-button'
        icon={<FaCog style={iconStyle} />}
      />
      <Button 
        buttonText="Logout" 
        className='button transparent-button'
        icon={<FaSignOutAlt style={iconStyle} />}
      />
    </div>
  );
}
