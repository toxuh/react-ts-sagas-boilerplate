import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import useUserPage from './useUserPage';

import './UserPage.scss';

const UserPage: React.FC = () => {
  const { fetchUserData, user } = useUserPage();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchUserData(id);
  }, []);

  return (
    <section className="UserPage">
      {user && (
        <>
          <h3>
            {user.name} <span>({user.username})</span>
          </h3>
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.website}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default UserPage;
