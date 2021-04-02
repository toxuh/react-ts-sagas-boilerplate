import React from 'react';
import cn from 'classnames';
import { FaArchive, FaCheck, FaCircle, FaPause, FaPlay } from 'react-icons/fa';

import './StatusIcon.scss';

/* -light types are not implemented */
type Props = {
  name?: 'new' | 'success' | 'progress' | 'paused' | 'archived';
  size?: 'small' | 'default' | 'big';
  type?:
    | 'square'
    | 'rounded'
    | 'circle'
    | 'square-light'
    | 'rounded-light'
    | 'circle-light';
};

const StatusIcon: React.FC<Props> = ({
  name,
  size = 'default',
  type = 'rounded',
}) => {
  const classes = cn('StatusIcon', name, size, type);
  let icon: React.ReactNode;

  switch (name) {
    case 'new':
      icon = <FaCircle />;
      break;
    case 'success':
      icon = <FaCheck />;
      break;
    case 'progress':
      icon = <FaPlay />;
      break;
    case 'paused':
      icon = <FaPause />;
      break;
    case 'archived':
      icon = <FaArchive />;
      break;
    default:
      icon = <FaCircle />;
  }

  return <div className={classes}>{icon}</div>;
};

export default StatusIcon;
