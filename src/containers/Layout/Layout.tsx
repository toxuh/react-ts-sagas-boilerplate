import React from 'react';
import { Link } from 'react-router-dom';

import './Layout.scss';

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div className="Layout">
      <header>
        <h1>React boilerplate</h1>
      </header>
      <main>
        <aside>
          <nav>
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <section>{children}</section>
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
