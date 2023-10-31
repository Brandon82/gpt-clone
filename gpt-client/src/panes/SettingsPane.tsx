import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from '@components/Button/Button';
import { ChatSettingBox } from '@components/ChatSettingBox';
import { ImageSettingBox } from '@components/ImageSettingBox';

export const SettingsPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const handleReturnToPane = () => {
    dispatch({ type: 'SET_PANE', payload: state.appType });
  };

  return (
    <div className="pane">
        <div>
          <Button buttonText={`← Return to ${state.appType === 'chat' ? 'Chat' : 'Image Generator'}`} onClick={handleReturnToPane} className="return-button"/>
          <h3>Settings</h3>
          <h4>Chat Settings</h4>
          <ChatSettingBox/>
          <h4>Image Generator Settings</h4>
          <ImageSettingBox/>
        </div>
    </div>
  )
};