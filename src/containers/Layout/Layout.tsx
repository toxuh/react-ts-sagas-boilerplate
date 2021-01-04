import React from 'react';

import Sidebar from './Sidebar';

import './Layout.scss';

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div className="Layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
