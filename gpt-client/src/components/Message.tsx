import React from 'react';
import { Avatar } from './Avatar/Avatar';
import ReactMarkdown from 'react-markdown';
import modelAvatar from '../assets/modelpfp.png';
import userAvatar from '../assets/userpfp.png';

interface MessageProps {
  source: string;
  text: string;
}

export const Message: React.FC<MessageProps> = ({ source, text }) => {
  const getAvatarSource = (source: string) => {
    if (source === 'model') {
      return modelAvatar;
    }
    if (source === 'user') {
      return userAvatar;
    }
    return '';
  };

  return (
    <div className="message-container">
      <div className="msg-avatar-container">
        <Avatar imageUrl={getAvatarSource(source)} size={source === 'model' ? 34 : 34} />
      </div>
      <div className="message">
        <ReactMarkdown children={text || ''} />
      </div>
    </div>
  );
};