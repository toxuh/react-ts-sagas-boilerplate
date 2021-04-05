import React from 'react';
import { useIntl } from 'react-intl';
import {
  FaBullhorn,
  FaHeart,
  FaRegComment,
  FaRegPlayCircle,
  FaUserPlus,
  FaUsers,
} from 'react-icons/fa';

import { Card, Section } from '../../components';

import messages from './messages';
import './Exchange.scss';

const Exchange: React.FC = () => {
  const intl = useIntl();

  const mainItems = [
    {
      title: intl.formatMessage(messages.views),
      description: intl.formatMessage(messages.viewsDescription),
      icon: <FaRegPlayCircle />,
      cph: [120],
      link: 'exchange/views',
      measurement: intl.formatMessage(messages.viewsMeasurement),
    },
    {
      title: intl.formatMessage(messages.subscribers),
      description: intl.formatMessage(messages.subscribersDescription),
      icon: <FaUserPlus />,
      cph: [120],
      link: 'exchange/subscribers',
      measurement: intl.formatMessage(messages.subscribersMeasurement),
    },
    {
      title: intl.formatMessage(messages.likes),
      description: intl.formatMessage(messages.likesDescription),
      icon: <FaHeart />,
      cph: [60],
      link: 'exchange/likes',
      measurement: intl.formatMessage(messages.likesMeasurement),
    },
    {
      title: intl.formatMessage(messages.comments),
      description: intl.formatMessage(messages.commentsDescription),
      icon: <FaRegComment />,
      cph: [60],
      link: 'exchange/comments',
      measurement: intl.formatMessage(messages.commentsMeasurement),
    },
  ];
  const additionalItems = [
    {
      title: intl.formatMessage(messages.referrals),
      description: intl.formatMessage(messages.referralsDescription),
      icon: <FaUsers />,
      cph: [1000],
      link: 'referrals',
      measurement: intl.formatMessage(messages.referralsMeasurement),
    },
    {
      title: intl.formatMessage(messages.promotions),
      description: intl.formatMessage(messages.promotionsDescription),
      icon: <FaBullhorn />,
      cph: [100, 2500],
      link: 'promotions',
      measurement: intl.formatMessage(messages.promotionsMeasurement),
    },
  ];

  return (
    <Section
      className="Exchange"
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
              <div className="Cph">
                {item.cph.join('–')} {intl.formatMessage(messages.credits)}/
                {item.measurement}
              </div>
            </Card>
          ))}
        </div>
        <div className="Holder">
          <h4>{intl.formatMessage(messages.additional)}</h4>
          {additionalItems.map((item) => (
            <Card
              icon={item.icon}
              title={item.title}
              link={{
                href: item.link,
                title: intl.formatMessage(messages.doIt),
              }}
              w={48}
            >
              <div className="Description">{item.description}</div>
              <div className="Cph">
                {item.cph.join('–')} {intl.formatMessage(messages.credits)}/
                {item.measurement}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="Stats">
        <h4>{intl.formatMessage(messages.statistics)}</h4>
        <article>
          <div className="Property">
            <div className="Title">
              {intl.formatMessage(messages.exchanges)}
            </div>
            <div className="Description">
              {intl.formatMessage(messages.lastSevenDays)}
            </div>
          </div>
          <div className="Value">0</div>
        </article>
        <article>
          <div className="Property">
            <div className="Title">
              {intl.formatMessage(messages.referrals)}
            </div>
            <div className="Description">
              {intl.formatMessage(messages.lastTwentyDays)}
            </div>
          </div>
          <div className="Value">0</div>
        </article>
        <article>
          <div className="Property">
            <div className="Title">{intl.formatMessage(messages.sessions)}</div>
            <div className="Description">
              {intl.formatMessage(messages.sessionsDescription)}
            </div>
          </div>
          <div className="Value">0/3</div>
        </article>
      </div>
    </Section>
  );
};

export default Exchange;
