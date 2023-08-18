import React, { useState } from 'react';
import './CollapsingHeader.css';

interface CollapsingHeaderProps {
  title: string;
  isCollapsed?: boolean;
  children: React.ReactNode;
}

export const CollapsingHeader: React.FC<CollapsingHeaderProps> = ({ title, isCollapsed = true, children }) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="collapsing-header">
      <div className="collapsing-header-title" onClick={toggleCollapse}>
        {title}
      </div>
      {!collapsed && <div className="collapsing-header-body">{children}</div>}
    </div>
  );
};
