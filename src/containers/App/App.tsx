import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import UserPage from '../UserPage/UserPage';
import UsersList from '../UsersList/UsersList';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/users" component={UsersList} exact />
        <Route path="/users/:id" component={UserPage} exact />
      </Switch>
    </Layout>
  );
};

export default App;
