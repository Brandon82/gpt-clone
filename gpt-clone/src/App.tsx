import React from 'react';
import './App.css';
import { ChatPane } from './components/ChatPane';
import { SidePane } from './components/SidePane';

const App: React.FC = () => {
  return (
    <div className="App">
      <SidePane/>
      <ChatPane/>
    </div>
  );
}

export default App;