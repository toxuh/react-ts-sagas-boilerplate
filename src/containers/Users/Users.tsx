import React from 'react';
import { useIntl } from 'react-intl';

import useUsers from './useUsers';

import messages from './messages';

const Users: React.FC = () => {
  const intl = useIntl();
  const { fetchUsers, usersList } = useUsers();

  return (
    <>
      <h3>{intl.formatMessage(messages.list)}:</h3>
      <button type="button" onClick={() => fetchUsers()}>
        {intl.formatMessage(messages.fetch)}
      </button>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
