import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { Message } from './Message';

export const MessageList: React.FC<{}> = () => {
  const {state} = useContext(GPTContext);
  const currentConversation = state.chatHistory[state.chatIndex]?.messages || [];

  return (
    <div className="message-list">
      {currentConversation.map((message, index) => (
        <Message key={index} source={message.source} text={message.text || ''} />
      ))}
    </div>
  );
};
