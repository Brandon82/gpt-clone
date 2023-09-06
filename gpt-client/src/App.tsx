import React, { useContext } from 'react';
import './App.scss';
import { GPTContext } from '@state/GPTContext';
import { SidePane } from './panes/SidePane';
import { ChatPane } from './panes/ChatPane';
import { SettingsPane } from './panes/SettingsPane';

const App: React.FC = () => {
  const {state} = useContext(GPTContext);

  return (
    <div className="App">
      <SidePane/>
      {state.pane === 'chat' ? <ChatPane/> : <SettingsPane/>}
    </div>
  );
}

export default App;