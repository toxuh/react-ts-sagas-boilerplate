import React from 'react';
import { useIntl } from 'react-intl';
import {
  FaBolt,
  FaEuroSign,
  FaListAlt,
  FaPaperPlane,
  FaRocket,
  FaStar,
} from 'react-icons/fa';

import { Card, Section } from '../../components';

import messages from './messages';
import './Store.scss';

const Store: React.FC = () => {
  const intl = useIntl();

  const mainItems = [
    {
      title: intl.formatMessage(messages.membership),
      description: intl.formatMessage(messages.membershipDescription),
      icon: <FaStar />,
      link: 'store/membership',
    },
    {
      title: intl.formatMessage(messages.priority),
      description: intl.formatMessage(messages.priorityDescription),
      icon: <FaBolt />,
      link: 'store/priority',
    },
    {
      title: intl.formatMessage(messages.credits),
      description: intl.formatMessage(messages.creditsDescription),
      icon: <FaEuroSign />,
      link: 'store/credits',
    },
    {
      title: intl.formatMessage(messages.campaignSlots),
      description: intl.formatMessage(messages.campaignSlotsDescription),
      icon: <FaPaperPlane />,
      link: 'store/campaignSlots',
    },
    {
      title: intl.formatMessage(messages.express),
      description: intl.formatMessage(messages.expressDescription),
      icon: <FaRocket />,
      link: 'store/express',
    },
    {
      title: intl.formatMessage(messages.sessions),
      description: intl.formatMessage(messages.sessionsDescription),
      icon: <FaListAlt />,
      link: 'store/sessions',
    },
  ];

  return (
    <Section
      className="Store"
      caption={intl.formatMessage(messages.caption)}
      title={intl.formatMessage(messages.title)}
    >
      <div className="Main">
        <div className="Holder">
          <h4>{intl.formatMessage(messages.common)}</h4>
          {mainItems.map((item) => (
            <Card
              icon={item.icon}
              title={item.title}
              link={{
                href: item.link,
                title: `${intl.formatMessage(
                  messages.get,
                )} ${item.title.toLowerCase()}`,
              }}
              w={48}
            >
              <div className="Description">{item.description}</div>
            </Card>
          ))}
        </div>
      </div>
      <div className="Stats">
        <h4>{intl.formatMessage(messages.statistics)}</h4>
        <article>
          <div className="Property">
            <div className="Title">123</div>
          </div>
          <div className="Value">0</div>
        </article>
      </div>
    </Section>
  );
};

export default Store;
