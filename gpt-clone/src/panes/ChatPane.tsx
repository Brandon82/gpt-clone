import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';
import { TextInput } from '../components/TextInput/TextInput';

// ChatBox Component
export const ChatPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  return (
    <div className="chatpane">
      <h3>chatpane</h3>
      <TextInput placeholder="Type a message..." />
    </div>
  );
}