import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Message } from './Message';
import { ImageMessage } from './ImageMessage';

export const ImageList: React.FC<{}> = () => {
  const {state} = useContext(GPTContext);

  const currentConversation = state.chatHistory[state.chatIndex]?.messages || [];

  return (
    <div className="image-list">
      {currentConversation.map((message, index) => {
        if (message.type === 'image') {
          return <ImageMessage key={index} source={message.source} imageUrl={message.text || ''} />;
        } else if (message.type === 'chat') {
          return <Message key={index} source={message.source} text={message.text || ''} />;
        }
        return null; // Fallback in case there's a message type that's neither 'image' nor 'chat'
      })}
    </div>
  );
};
