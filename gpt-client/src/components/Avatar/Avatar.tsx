import React from 'react';
import './Avatar.scss';

interface AvatarProps {
  imageUrl: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 50 }) => {
  const avatarStyle = {
    width: `${size}px`,
    height: `100%`,
  };

  return (
    <div className="avatar" style={avatarStyle}>
      <img src={imageUrl} alt="User Avatar" className="avatar-image" />
    </div>
  );
};