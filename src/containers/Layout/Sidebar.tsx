import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFont,
  FaHome,
  FaRocket,
  FaSlackHash,
  FaTable,
  FaTasks,
  FaUsers,
} from 'react-icons/fa';

import { Badge } from '../../components';

import Avatar from './Avatar';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <aside className="Sidebar">
      <Avatar />
      <h4>Common</h4>
      <nav className="SideMenu">
        <ul>
          <li>
            <Link to="/">
              <Badge color="716fdf">
                <FaHome />
              </Badge>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/typography">
              <Badge color="36a6e3">
                <FaFont />
              </Badge>
              Typography
            </Link>
          </li>
          <li>
            <Link to="/colors">
              <Badge color="b24cc0">
                <FaSlackHash />
              </Badge>
              Colors
            </Link>
          </li>
          <li>
            <Link to="/components">
              <Badge color="21b17c">
                <FaRocket />
              </Badge>
              Components
            </Link>
          </li>
          <li>
            <Link to="/forms">
              <Badge color="fd840b">
                <FaTable />
              </Badge>
              Forms
            </Link>
          </li>
        </ul>
      </nav>
      <h4>APIs</h4>
      <nav className="SideMenu">
        <ul>
          <li>
            <Link to="/users">
              <Badge color="f7727b">
                <FaUsers />
              </Badge>
              Users
            </Link>
          </li>
          <li>
            <Link to="/todo">
              <Badge color="9875f8">
                <FaTasks />
              </Badge>
              Todo
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
