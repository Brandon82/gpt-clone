import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { ButtonGroup } from '@components/ButtonGroup/ButtonGroup';
import { ChatPane } from './ChatPane';
import { ImagePane } from './ImagePane';

const options = ['chat', 'image'];

export const MainPane: React.FC = () => {
  const { state, dispatch } = useContext(GPTContext);

  const handleAppTypeChange = (value: string) => {
    dispatch({
      type: 'SET_PANE',
      payload: value
    });
    dispatch({
      type: 'SET_APP_TYPE',
      payload: value
    });
  };

  return (
    <div className="pane">
      <div className="app-type-selector">
        <ButtonGroup options={options} value={state.appType} onChange={handleAppTypeChange}/>
      </div>
      {state.appType === 'chat' ? <ChatPane /> : state.appType === 'image' ? <ImagePane /> : null}
    </div>
  );
};