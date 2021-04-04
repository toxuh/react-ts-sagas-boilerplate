import React from 'react';
import { useIntl } from 'react-intl';
import {
  FaHeart,
  FaRegComment,
  FaRegPlayCircle,
  FaUsers,
} from 'react-icons/fa';

import { Card, Section } from '../../components';

import messages from './messages';
import './Exchange.scss';

const Exchange: React.FC = () => {
  const intl = useIntl();

  const mainItems = [
    {
      title: 'Views',
      description: 'View other users videos and earn Credits',
      icon: <FaRegPlayCircle />,
      cph: [120],
      link: 'exchange/views',
      measurement: 'view hour',
    },
    {
      title: 'Subscribers',
      description: 'Subscribe to other users channels and earn Credits',
      icon: <FaUsers />,
      cph: [120],
      link: 'exchange/subscribers',
      measurement: 'subscription',
    },
    {
      title: 'Likes',
      description: 'Like other users videos and earn Credits',
      icon: <FaHeart />,
      cph: [60],
      link: 'exchange/likes',
      measurement: 'like',
    },
    {
      title: 'Comments',
      description: 'Comment on other users videos and earn Credits',
      icon: <FaRegComment />,
      cph: [60],
      link: 'exchange/comments',
      measurement: 'comment',
    },
  ];

  return (
    <Section
      className="Exchange"
      caption={intl.formatMessage(messages.caption)}
      title={intl.formatMessage(messages.title)}
    >
      <div className="Main">
        <div className="Actions">
          <h4>Common</h4>
          {mainItems.map((item) => (
            <Card
              icon={item.icon}
              title={item.title}
              link={{
                href: item.link,
                title: `Get ${item.title.toLowerCase()}`,
              }}
              w={48}
            >
              <div className="Description">{item.description}</div>
              <div className="Cph">
                {item.cph.join('–')} credits/{item.measurement}
              </div>
            </Card>
          ))}
        </div>
        <div className="Additional">
          <h4>Additional</h4>
        </div>
      </div>
      <div className="Stats">
        <h4>Your statistics:</h4>
      </div>
    </Section>
  );
};

export default Exchange;
