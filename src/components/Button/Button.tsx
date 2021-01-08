import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  children: React.ReactNode;
  htmlType: 'button' | 'submit';
  type?: 'default' | 'primary';
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  children,
  htmlType = 'button',
  type = 'default',
  onClick,
}) => {
  const classes = cn('Button', type);

  return (
    <button
      className={classes}
      type={htmlType === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
