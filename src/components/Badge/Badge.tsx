import React from 'react';

import './Badge.scss';

type Props = {
  color?: string;
  children: React.ReactNode;
};

const Badge: React.FC<Props> = ({ color = '36a6e3', children }) => (
  <div className="Badge" style={{ backgroundColor: `#${color}` }}>
    {children}
  </div>
);

export default Badge;
