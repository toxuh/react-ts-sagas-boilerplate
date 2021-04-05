import React from 'react';
import { useIntl } from 'react-intl';
import { FaCog, FaUserAlt, FaYoutube } from 'react-icons/fa';

import { Card, Section } from '../../components';

import Security from './Security';

import messages from './messages';
import './Account.scss';

const Account: React.FC = () => {
  const intl = useIntl();

  return (
    <Section
      className="Account"
      caption={intl.formatMessage(messages.caption)}
      title={intl.formatMessage(messages.title)}
    >
      <Card title="Profile settings" icon={<FaUserAlt />}>
        Settings
      </Card>
      <Card title="Linked accounts" icon={<FaYoutube />}>
        Accounts
      </Card>
      <Security is2FactorAuthentication={false} />
      <Card title="Preferences" icon={<FaCog />}>
        Preferences
      </Card>
    </Section>
  );
};

export default Account;
