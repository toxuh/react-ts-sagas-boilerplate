import React from 'react';
import cn from 'classnames';
import { FaTimes } from 'react-icons/fa';

import './Modal.scss';

type Props = {
  children: React.ReactNode;
  isOpened: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, isOpened, onClose }) => {
  const classes = cn('Modal', {
    hide: !isOpened,
  });

  const handleClose = (e: React.SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes} role="presentation" onClick={handleClose}>
      <div>
        <FaTimes className="CloseIcon" role="presentation" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
