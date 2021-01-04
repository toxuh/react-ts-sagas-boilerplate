import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

import avatar from './imgs/avatar.png';

import './Avatar.scss';

const Avatar: React.FC = () => (
  <section className="Avatar">
    <img src={avatar} alt="Samantha Doe" />
    <div className="Info">
      <span className="Name">Samantha Doe</span>
      <span className="Mail">samantha.doe@gmail.com</span>
    </div>
    <Link className="Settings" to="/settings">
      <FaCog />
    </Link>
  </section>
);

export default Avatar;
