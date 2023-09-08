import React, { useContext, useState, useEffect } from 'react';
import { GPTContext } from '@state/GPTContext';
import { StatusGumball } from '@components/StatusGumball/StatusGumball';
import { getConversationName } from '@state/utils';

const HistoryItem: React.FC<{linkText: string, onClick: () => void, color: string}> = ({linkText, onClick, color}) => {
  return (
    <span className='history-item' onClick={onClick}>
      <StatusGumball size={14} color={color}/> 
      <a href="#" onClick={(e) => {
        e.preventDefault(); 
        onClick();
      }}>{linkText}</a>
    </span>
  );
}

export const ChatHistoryList: React.FC<{}> = () => {
  const {state, dispatch} = useContext(GPTContext);
  
  const [colorList, setColorList] = useState<string[]>([]);

  useEffect(() => {
    if (colorList.length < state.chatHistory.length) {
      const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColorList([...colorList, newColor]);
    }
  }, [state.chatHistory]);

  const handleClick = (index: number) => {
    dispatch({ type: 'SET_CHAT_INDEX', payload: index });  
    const appTypeOfSelectedConversation = state.chatHistory[index].appType;
    dispatch({ type: 'SET_APP_TYPE', payload: appTypeOfSelectedConversation });
  }
  
  return (
    <div>
      {state.chatHistory.map((conversation, index) => (
        <HistoryItem 
          key={index} 
          linkText={getConversationName(conversation, index, state.chatHistory)} 
          color={colorList[index] || 'grey'}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
