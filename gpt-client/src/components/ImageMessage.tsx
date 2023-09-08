import React from 'react';
import { Avatar } from './Avatar/Avatar';

interface ImageMessageProps {
  source: string;
  imageUrl: string;
}

export const ImageMessage: React.FC<ImageMessageProps> = ({ source, imageUrl }) => {
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
      <Avatar imageUrl={getAvatarSource(source)} size={source === 'model' ? 34 : 34} />
      <div className="message">
        <img src={imageUrl} alt="message" />
      </div>
    </div>
  );
};