import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';

// SideBarStack Component
export const SideBarStack: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  return (
    <div className="sidebar-stack">
      <p>+ Clear Conversations</p>
      <p>& Settings</p>
      <p>- Logouts</p>
    </div>
  );
}