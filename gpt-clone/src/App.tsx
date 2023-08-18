import React from 'react';
import './App.css';
import { ChatPane } from './panes/ChatPane';
import { SidePane } from './panes/SidePane';

const App: React.FC = () => {
  return (
    <div className="App">
      <SidePane/>
      <ChatPane/>
    </div>
  );
}

export default App;