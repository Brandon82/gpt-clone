import React, { useContext, useState, useEffect } from 'react';
import { GPTContext } from '@state/GPTContext';
import { StatusGumball } from '@components/StatusGumball/StatusGumball';

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
    if (colorList.length < state.chatHistory.length + state.imageHistory.length) {
      const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColorList([...colorList, newColor]);
    }
  }, [state.chatHistory, state.imageHistory]);

  const handleChatClick = (index: number, type: string) => {
    dispatch({ type: 'SET_CHAT_INDEX', payload: index });  
    const appTypeOfSelectedConversation = type;
    dispatch({ type: 'SET_APP_TYPE', payload: appTypeOfSelectedConversation });
  }

  const handleImageClick = (index: number, type: string) => {
    dispatch({ type: 'SET_IMAGE_INDEX', payload: index });  
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
          onClick={() => handleChatClick(index, 'chat')}
        />
      ))}

      {state.imageHistory.map((image, index) => (
        <HistoryItem 
          key={index} 
          linkText={`Image - ${index + 1}`} 
          color={colorList[state.chatHistory.length + index] || 'grey'}
          onClick={() => handleImageClick(index, 'image')}
        />
      ))}
    </div>
  );
}