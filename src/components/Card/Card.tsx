import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../Badge/Badge';

import './Card.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  link?: {
    title: string;
    href: string;
  };
  title?: string;
  w?: number;
};

const Card: React.FC<Props> = ({
  children,
  className = '',
  icon,
  iconColor = '32a7e2',
  link,
  title,
  w = 100,
}) => (
  <div
    className={`Card ${link ? 'withLink' : ''} ${className}`}
    style={{ width: `${w}%` }}
  >
    {title && (
      <div>
        {icon ? (
          <div className="WithBadge">
            <Badge color={iconColor}>{icon}</Badge>
            <h3>{title}</h3>
          </div>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
    )}
    {children}
    {link && (
      <div className="Link">
        <Link to={link.href}>{link.title}</Link>
      </div>
    )}
  </div>
);

export default Card;
