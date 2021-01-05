import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import {
  FaBullhorn,
  FaExchangeAlt,
  FaHome,
  FaPaperPlane,
  FaQuestion,
  FaShoppingCart,
  FaUsersCog,
} from 'react-icons/fa';

import { Badge } from '../../components';

import Avatar from './Avatar';

import messages from './messages';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const intl = useIntl();

  return (
    <aside className="Sidebar">
      <Avatar />
      <h4>{intl.formatMessage(messages.common)}</h4>
      <nav className="SideMenu">
        <ul>
          <li>
            <Link to="/dashboard">
              <Badge color="716fdf">
                <FaHome />
              </Badge>
              {intl.formatMessage(messages.dashboard)}
            </Link>
          </li>
          <li>
            <Link to="/campaigns">
              <Badge color="36a6e3">
                <FaPaperPlane />
              </Badge>
              {intl.formatMessage(messages.campaigns)}
            </Link>
          </li>
          <li>
            <Link to="/exchange">
              <Badge color="b24cc0">
                <FaExchangeAlt />
              </Badge>
              {intl.formatMessage(messages.exchange)}
            </Link>
          </li>
          <li>
            <Link to="/store">
              <Badge color="21b17c">
                <FaShoppingCart />
              </Badge>
              {intl.formatMessage(messages.store)}
            </Link>
          </li>
          <li>
            <Link to="/referrals">
              <Badge color="fd840b">
                <FaUsersCog />
              </Badge>
              {intl.formatMessage(messages.referrals)}
            </Link>
          </li>
        </ul>
      </nav>
      <h4>{intl.formatMessage(messages.info)}</h4>
      <nav className="SideMenu">
        <ul>
          <li>
            <Link to="/news">
              <Badge color="f7727b">
                <FaBullhorn />
              </Badge>
              {intl.formatMessage(messages.news)}
            </Link>
          </li>
          <li>
            <Link to="/help">
              <Badge color="9875f8">
                <FaQuestion />
              </Badge>
              {intl.formatMessage(messages.help)}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
