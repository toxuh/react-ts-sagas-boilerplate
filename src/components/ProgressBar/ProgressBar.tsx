import React from 'react';

import './ProgressBar.scss';

type Props = {
  color?: string;
  finalColor?: string;
  top: number;
  value: number;
};

const ProgressBar: React.FC<Props> = ({
  color = '216fed',
  finalColor = '22b07d',
  top,
  value,
}) => {
  const w = Math.floor((value / top) * 100);
  const c = w === 100 ? finalColor : color;

  return (
    <div className="ProgressBar">
      <div style={{ backgroundColor: `#${c}`, width: `${w}%` }}>
        {value} / {top}
      </div>
    </div>
  );
};

export default ProgressBar;
