import React from 'react';

import { PaginationType } from '../../types/api';

import './Pagination.scss';

type Props = {
  handleClick: (p: number) => void;
} & PaginationType;

const Pagination: React.FC<Props> = ({ current, pages, handleClick }) => {
  return (
    <div className="Pagination">
      <ul>
        {[...Array(pages)].map((o, i) => {
          const p = i + 1;
          return (
            <li
              key={p}
              className={p === current ? 'active' : ''}
              role="presentation"
              onClick={() => {
                if (p !== current) {
                  handleClick(p);
                }
              }}
            >
              {p}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
