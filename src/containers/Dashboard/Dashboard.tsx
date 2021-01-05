import React from 'react';
import { useIntl } from 'react-intl';
import {
  FaClock,
  FaDollarSign,
  FaRubleSign,
  FaStar,
  FaTag,
} from 'react-icons/fa';

import { Card, List, ProgressBar, Section } from '../../components';

import messages from './messages';

import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const intl = useIntl();

  return (
    <Section
      className="Dashboard"
      caption={intl.formatMessage(messages.caption)}
      title={intl.formatMessage(messages.title)}
    >
      <Card
        icon={<FaDollarSign />}
        iconColor="22b07d"
        link={{
          title: intl.formatMessage(messages.refill),
          href: '/account/refill',
        }}
        title={intl.formatMessage(messages.balance)}
        w={31}
      >
        <span className="BigText">
          <FaRubleSign />
          75 254
        </span>
      </Card>
      <Card
        icon={<FaTag />}
        link={{
          title: intl.formatMessage(messages.upgrade),
          href: '/account/plans',
        }}
        title={intl.formatMessage(messages.membership)}
        w={31}
      >
        <span className="BigText">Free</span>
      </Card>
      <Card
        icon={<FaClock />}
        link={{ title: intl.formatMessage(messages.buyMore), href: '/store' }}
        iconColor="ff8700"
        title={intl.formatMessage(messages.sessions)}
        w={31}
      >
        <span className="BigText">5</span>
      </Card>
      <Card title={intl.formatMessage(messages.dailyBonuses)}>
        <div className="Daily">
          <section>
            <h5>{intl.formatMessage(messages.exchangeViews)}</h5>
            <ProgressBar top={200} value={51} />
          </section>
          <section>
            <h5>{intl.formatMessage(messages.exchangeLikes)}</h5>
            <ProgressBar top={10} value={3} />
          </section>
          <section>
            <h5>{intl.formatMessage(messages.exchangeSubscriptions)}</h5>
            <ProgressBar top={10} value={6} />
          </section>
          <section>
            <h5>{intl.formatMessage(messages.exchangeComments)}</h5>
            <ProgressBar top={10} value={10} />
          </section>
        </div>
      </Card>
      <Card
        className="Level"
        icon={<FaStar />}
        iconColor="9471f6"
        title={`1 ${intl.formatMessage(messages.levels)}`}
      >
        <article className="Level_group">
          <h5>{intl.formatMessage(messages.benefits)}:</h5>
          <List items={[intl.formatMessage(messages.benefit1)]} checked />
        </article>
        <article className="Level_group">
          <h5>{intl.formatMessage(messages.nextLevel)}:</h5>
          <List
            items={[
              intl.formatMessage(messages.condition1),
              intl.formatMessage(messages.condition2),
              intl.formatMessage(messages.condition3),
            ]}
            checked
          />
        </article>
      </Card>
    </Section>
  );
};

export default Dashboard;
