import React from 'react';
import { Route, Switch } from 'react-router';

import Colors from '../Colors/Colors';
import Components from '../Components/Components';
import Dashboard from '../Dashboard/Dashboard';
import Forms from '../Forms/Forms';
import Layout from '../Layout/Layout';
import Settings from '../Settings/Settings';
import Todo from '../Todo/Todo';
import Typography from '../Typography/Typography';
import UserPage from '../UserPage/UserPage';
import UsersList from '../UsersList/UsersList';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/typography" component={Typography} exact />
        <Route path="/colors" component={Colors} exact />
        <Route path="/components" component={Components} exact />
        <Route path="/forms" component={Forms} exact />
        <Route path="/users" component={UsersList} exact />
        <Route path="/users/:id" component={UserPage} exact />
        <Route path="/todo" component={Todo} exact />
        <Route path="/settings" component={Settings} exact />
      </Switch>
    </Layout>
  );
};

export default App;
