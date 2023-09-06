import React from 'react';
import { Avatar } from './Avatar/Avatar';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
  source: string;
  text: string;
}

export const Message: React.FC<MessageProps> = ({ source, text }) => {
  const getAvatarSource = (source: string) => {
    if (source === 'model') {
      return 'https://dwglogo.com/wp-content/uploads/2019/03/1600px-OpenAI_logo-1024x705.png';
    }
    if (source === 'user') {
      return 'https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_1280.png';
    }
    return '';
  };

  return (
    <div className="message-container">
      <Avatar imageUrl={getAvatarSource(source)} size={source === 'model' ? 40 : 34} />
      <div className="message">
        <ReactMarkdown children={text || ''} />
      </div>
    </div>
  );
};