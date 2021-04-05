import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  children: React.ReactNode;
  htmlType?: 'button' | 'submit';
  size?: 'tiny' | 'small' | 'default' | 'big' | 'huge';
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  children,
  htmlType = 'button',
  size = 'default',
  type = 'default',
  onClick,
}) => {
  const classes = cn('Button', size, type);

  // TODO: check why?
  /* eslint-disable react/button-has-type */
  return (
    <button className={classes} type={htmlType} onClick={onClick}>
      {children}
    </button>
  );
  /* eslint-enable react/button-has-type */
};

export default Button;
