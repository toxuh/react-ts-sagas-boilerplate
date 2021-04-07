import React, { InputHTMLAttributes } from 'react';

import './Input.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
  className = '',
  type = 'text',
  defaultValue,
  ...restProps
}) => <input type={type} className={`Input ${className}`} {...restProps} />;

export default Input;
