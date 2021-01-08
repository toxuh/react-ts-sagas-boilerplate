import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { FaEllipsisV } from 'react-icons/fa';

import { Modal, Pagination, Section, StatusIcon } from '../../components';

import NewCampaign from '../Forms/NewCampaign/NewCampaign';

import messages from './messages';

import './Campaigns.scss';

const Campaigns: React.FC = () => {
  const intl = useIntl();

  const [createNewModalOpened, toggleCreateModal] = useState(false);

  return (
    <Section
      buttonText={intl.formatMessage(messages.createNew)}
      className="Campaigns"
      caption={intl.formatMessage(messages.caption)}
      title={intl.formatMessage(messages.title)}
      onButtonClick={() => toggleCreateModal(true)}
    >
      <ul className="List">
        <li>
          <div className="Status">
            <StatusIcon />
          </div>
          <div className="Heading">
            <h5>5 Simple Steps To An Effective VIDEO Strategy</h5>
            <p>
              {intl.formatMessage(messages.started)}:{' '}
              {moment('2021-01-05 14:30:59').format('DD.MM.YYYY HH:mm:ss')}
            </p>
          </div>
          <div className="Progress">0 / 3500</div>
          <div className="Actions">
            <button type="button">
              <FaEllipsisV />
            </button>
          </div>
        </li>
        <li>
          <div className="Status">
            <StatusIcon name="progress" />
          </div>
          <div className="Heading">
            <h5>
              These 5 Simple VIDEO Tricks Will Pump Up Your Sales Almost
              Instantly
            </h5>
            <p>
              {intl.formatMessage(messages.started)}:{' '}
              {moment('2021-01-05 14:35:15').format('DD.MM.YYYY HH:mm:ss')}
            </p>
          </div>
          <div className="Progress">200 / 799</div>
          <div className="Actions">
            <button type="button">
              <FaEllipsisV />
            </button>
          </div>
        </li>
        <li>
          <div className="Status">
            <StatusIcon name="paused" />
          </div>
          <div className="Heading">
            <h5>Why Some People Almost Always Make/Save Money With VIDEO</h5>
            <p>
              {intl.formatMessage(messages.started)}:{' '}
              {moment('2021-01-05 14:48:23').format('DD.MM.YYYY HH:mm:ss')}
            </p>
          </div>
          <div className="Progress">10 / 100</div>
          <div className="Actions">
            <button type="button">
              <FaEllipsisV />
            </button>
          </div>
        </li>
        <li>
          <div className="Status">
            <StatusIcon name="success" />
          </div>
          <div className="Heading">
            <h5>9 Ways VIDEO Can Make You Invincible</h5>
            <p>
              {intl.formatMessage(messages.started)}:{' '}
              {moment('2021-01-05 15:01:34').format('DD.MM.YYYY HH:mm:ss')}
            </p>
          </div>
          <div className="Progress">500 / 500</div>
          <div className="Actions">
            <button type="button">
              <FaEllipsisV />
            </button>
          </div>
        </li>
        <li>
          <div className="Status">
            <StatusIcon name="archived" />
          </div>
          <div className="Heading">
            <h5>What Can Instagramm Teach You About VIDEO</h5>
            <p>
              {intl.formatMessage(messages.started)}:{' '}
              {moment('2021-01-05 15:17:57').format('DD.MM.YYYY HH:mm:ss')}
            </p>
          </div>
          <div className="Progress">300 / 500</div>
          <div className="Actions">
            <button type="button">
              <FaEllipsisV />
            </button>
          </div>
        </li>
      </ul>
      <Pagination pages={3} />
      <Modal
        isOpened={createNewModalOpened}
        onClose={() => toggleCreateModal(false)}
      >
        <div>
          <h4>{intl.formatMessage(messages.newCampaign)}</h4>
          <NewCampaign
            handleCloseModal={() => toggleCreateModal(false)}
            handleSubmitForm={(data) => console.log(data)}
          />
        </div>
      </Modal>
    </Section>
  );
};

export default Campaigns;
