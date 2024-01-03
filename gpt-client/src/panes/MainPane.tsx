import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { ChatPane } from './ChatPane';
import { Segmented } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { APP_TYPE_OPTIONS } from '@utils/constants';

export const MainPane: React.FC = () => {
  const { state, dispatch } = useContext(GPTContext);

  const handleAppTypeChange = (value: SegmentedValue) => {
    dispatch({
      type: 'SET_ACTIVE_PANE',
      payload: value
    });
    dispatch({
      type: 'SET_APP_TYPE',
      payload: value
    });
  };
  
  const currentConversation = state.chatHistory[state.chatIndex];

  return (
    <div className="pane">
      <div className="app-type-selector">
        <h4>
          {currentConversation ? `Chat - ${state.chatIndex + 1}` : ""}
        </h4>     
        <div className="app-selector-middle">  
          <Segmented size="large" block defaultValue={state.appType} value={state.appType} options={APP_TYPE_OPTIONS.map(option => ({ label: option.name, value: option.value }))} onChange={handleAppTypeChange} />
        </div>
      </div>
        <ChatPane />
    </div>
  );
};