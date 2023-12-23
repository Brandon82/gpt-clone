import React from 'react';
import { Avatar } from './Avatar/Avatar';
import modelAvatar from '../assets/modelpfp.png';
import userAvatar from '../assets/userpfp.png';

interface ImageMessageProps {
  source: string;
  imageUrl: string;
}

export const ImageMessage: React.FC<ImageMessageProps> = ({ source, imageUrl }) => {
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
      <Avatar imageUrl={getAvatarSource(source)} size={source === 'model' ? 34 : 34} />
      <div className="message">
        <img src={imageUrl} alt="message" />
      </div>
    </div>
  );
};