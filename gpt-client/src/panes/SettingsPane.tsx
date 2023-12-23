import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Button } from '@components/Button/Button';
import { ChatSettingBox } from '@components/ChatSettingBox';

export const SettingsPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const handleReturnToPane = () => {
    dispatch({ type: 'SET_PANE', payload: state.appType });
  };

  return (
    <div className="pane">
        <div className="setting-pane">
          <Button buttonText={`← Return to ${state.appType === 'chat' ? 'Chat' : 'Image Generator'}`} onClick={handleReturnToPane} className="return-button"/>
          <h3 className='settings_title_text'>Settings</h3>
          <ChatSettingBox/>
        </div>
    </div>
  )
};