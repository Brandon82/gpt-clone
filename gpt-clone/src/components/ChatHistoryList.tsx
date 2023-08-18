import React, { useContext } from 'react';
import { GPTContext } from '../state/GPTContext';
import StatusGumball from '../components/StatusGumball/StatusGumball';

export const ChatHistoryList: React.FC<{}> = () => {

  // Function to generate a random hex color code
  const randomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <span 
      className="list-text" 
      role="button" 
      tabIndex={0} 
      onClick={() => { /* Do something on click */ }}
      onKeyDown={(e) => { if (e.key === 'Enter') { /* Do something on Enter key press */ }}}
    >
      <StatusGumball size={10} /> Chat
    </span>
  );
}
