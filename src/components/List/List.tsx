import React from 'react';

import './List.scss';

type Props = {
  items: string[];
  checked?: boolean;
};

const List: React.FC<Props> = ({ items = [], checked = false }) => (
  <ul className={`List ${checked ? 'checked' : ''}`}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default List;
