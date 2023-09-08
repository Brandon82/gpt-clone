import React, { useContext } from 'react';
import './App.scss';
import { GPTContext } from '@state/GPTContext';
import { SidePane } from './panes/SidePane';
import { SettingsPane } from './panes/SettingsPane';
import { MainPane } from './panes/MainPane';

const App: React.FC = () => {
  const {state} = useContext(GPTContext);

  return (
    <div className="App">
      <SidePane/>
      {state.pane === 'chat' || state.pane === 'image' ? <MainPane/> : <SettingsPane/>}
    </div>
  );
}

export default App;