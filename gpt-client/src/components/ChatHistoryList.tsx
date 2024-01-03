import React, { useContext, useState, useEffect } from 'react';
import { GPTContext } from '@state/GPTContext';
import { StatusGumball } from '@components/StatusGumball/StatusGumball';

const HistoryItem: React.FC<{linkText: string, onClick: () => void, color: string, isActive: boolean}> = ({linkText, onClick, color, isActive}) => {
  return (
    <span className='history-item' onClick={onClick}>
      <StatusGumball size={18} color={color}/> 
      <a href="#" style={{ color: isActive ? '#2d84e2' : 'inherit'}} onClick={(e) => {
        e.preventDefault(); 
        onClick();
      }}>{linkText}</a>
    </span>
  );
}

export const ChatHistoryList: React.FC<{}> = () => {
  const {state, dispatch} = useContext(GPTContext);
  const [colorList, setColorList] = useState<string[]>(JSON.parse(sessionStorage.getItem('colorList') || '[]'));

  useEffect(() => {
    if (colorList.length < state.chatHistory.length) {
      const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColorList(prevColorList => [...prevColorList, newColor]);
    }
  }, [state.chatHistory]);

  useEffect(() => {
    sessionStorage.setItem('colorList', JSON.stringify(colorList));
  }, [colorList]);

  const handleChatClick = (index: number, type: string) => {
    dispatch({ type: 'SET_CHAT_INDEX', payload: index });  
    const appTypeOfSelectedConversation = type;
    dispatch({ type: 'SET_APP_TYPE', payload: appTypeOfSelectedConversation });
  }

  return (
    <div>
      {state.chatHistory.map((conversation, index) => (
        <HistoryItem 
          key={index} 
          linkText={`Chat - ${index + 1}`} 
          color={colorList[index] || 'grey'}
          onClick={() => handleChatClick(index, conversation.appType)}
          isActive={state.chatIndex === index}
        />
      ))}
    </div>
  );
}