import React from 'react';

import './Pagination.scss';

type Props = {
  currentPage?: number;
  itemsOnPage?: number;
  pages: number;
};

const Pagination: React.FC<Props> = () => {
  return (
    <div className="Pagination">
      <ul>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default Pagination;
