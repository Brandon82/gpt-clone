import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { ChatSettingBox } from '@components/ChatSettingBox';
import { Typography } from 'antd';
const { Link } = Typography;

export const SettingsPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);

  const handleReturnToPane = () => {
    dispatch({ type: 'SET_ACTIVE_PANE', payload: state.appType });
  };

  return (
    <div className="pane">
        <div className="setting-pane">
          <Link onClick={handleReturnToPane}>← Return to {state.appType === 'chat' ? 'Chat' : 'Image Generator'}</Link>
          <h3 className='settings_title_text'>Settings</h3>
          <ChatSettingBox/>
        </div>
    </div>
  )
};