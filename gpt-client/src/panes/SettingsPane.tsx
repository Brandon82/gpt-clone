import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from '@components/Button/Button';

export const SettingsPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const handleReturnToChat = () => {
    dispatch({ type: 'SET_PANE', payload: 'chat' });
  };

  return (
    <div className="pane">
        <div>
          <h3>Settings Pane</h3>
          <Button buttonText='← Return to Chat' onClick={handleReturnToChat} className="return-button"/>
        </div>
    </div>
  )
};
