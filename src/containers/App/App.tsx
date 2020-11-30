import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Users from '../Users/Users';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/users" component={Users} exact />
      </Switch>
    </Layout>
  );
};

export default App;
