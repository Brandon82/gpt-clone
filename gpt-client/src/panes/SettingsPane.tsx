import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from '@components/Button/Button';

export const SettingsPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const handleReturnToPane = () => {
    dispatch({ type: 'SET_PANE', payload: state.appType });
  };

  return (
    <div className="pane">
        <div>
          <h3>Settings</h3>
          <Button buttonText={`← Return to ${state.appType === 'chat' ? 'Chat' : 'Image Generator'}`} onClick={handleReturnToPane} className="return-button"/>
          <h4>Chat Settings</h4>
          <h4>Image Generator Settings</h4>

        </div>
    </div>
  )
};