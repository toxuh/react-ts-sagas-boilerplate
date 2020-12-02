import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useUsersList from './useUsersList';

import './UsersList.scss';

const UsersList: React.FC = () => {
  const { fetchUsers, usersList } = useUsersList();

  useEffect(() => {
    if (!usersList.length) {
      fetchUsers();
    }
  }, [usersList]);

  return (
    <ul className="UsersList">
      {usersList.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
