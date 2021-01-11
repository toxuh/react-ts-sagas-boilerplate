import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Account from '../Account/Account';
import Campaigns from '../Campaigns/Campaigns';
import Dashboard from '../Dashboard/Dashboard';
import Exchange from '../Exchange/Exchange';
import Help from '../Help/Help';
import Layout from '../Layout/Layout';
import News from '../News/News';
import Referrals from '../Referrals/Referrals';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';
import Store from '../Store/Store';

import useApp from './useApp';

const App: React.FC = () => {
  const { bootstrap, isLogged } = useApp();

  useEffect(() => {
    bootstrap();
  }, []);

  if (!isLogged) {
    return (
      <>
        <Switch>
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/sign-in" component={SignIn} exact />
        </Switch>
        <Redirect to="/sign-up" />
      </>
    );
  }

  return (
    <Layout>
      <Switch>
        <Route path="/account" component={Account} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/campaigns" component={Campaigns} exact />
        <Route path="/exchange" component={Exchange} exact />
        <Route path="/store" component={Store} exact />
        <Route path="/referrals" component={Referrals} exact />
        <Route path="/news" component={News} exact />
        <Route path="/help" component={Help} exact />
      </Switch>
      <Redirect to="/dashboard" />
    </Layout>
  );
};

export default App;
