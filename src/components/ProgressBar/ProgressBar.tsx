import React from 'react';
import cn from 'classnames';

import './ProgressBar.scss';

type Props = {
  top: number;
  value: number;
};

const ProgressBar: React.FC<Props> = ({ top, value }) => {
  const w = Math.floor((value / top) * 100);
  const c = w === 100;

  const classes = cn('ProgressBar', {
    finished: c,
  });

  return (
    <div className={classes}>
      <div style={{ width: `${w}%` }}>
        {value} / {top}
      </div>
    </div>
  );
};

export default ProgressBar;
