import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';
import { Button } from './Button/Button';
import { CollapsingHeader } from './CollapsingHeader/CollapsingHeader';
import { SideBarStack } from './SideBarStack';
import { FaPlus } from 'react-icons/fa';

// SidePane Component
export const SidePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  return (
    <div className="sidepane">
      <h2>GPT-Clone</h2>
      <Button buttonText="New Conversation" icon={<FaPlus />} />
      <CollapsingHeader title="Chat History" isCollapsed={false}>
        <p>Chat one</p>
        <p>Chat two</p>
        <p>Chat three</p>
      
      </CollapsingHeader>
      <SideBarStack/>

    </div>
  );
}