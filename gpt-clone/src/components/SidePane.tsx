import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';
import { AddButton } from './AddButton/AddButton';
import { CollapsingHeader } from './CollapsingHeader/CollapsingHeader';

// SidePane Component
export const SidePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  return (
    <div className="sidepane">
      <h3>GPT-Clone</h3>
      <AddButton text="New Conversation" />
      <CollapsingHeader title="Chat History" isCollapsed={false}>
        <p>This is the body of the header.</p>
      </CollapsingHeader>

    </div>
  );
}