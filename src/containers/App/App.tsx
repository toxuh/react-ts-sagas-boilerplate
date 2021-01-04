import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from '../Dashboard/Dashboard';
import Layout from '../Layout/Layout';
import UserPage from '../UserPage/UserPage';
import UsersList from '../UsersList/UsersList';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/users" component={UsersList} exact />
        <Route path="/users/:id" component={UserPage} exact />
      </Switch>
    </Layout>
  );
};

export default App;
