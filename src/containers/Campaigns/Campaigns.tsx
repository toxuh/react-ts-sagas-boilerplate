import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';

import { Modal, Pagination, Section, StatusIcon } from '../../components';

import NewCampaign from '../Forms/NewCampaign/NewCampaign';

import useCampaigns from './useCampaigns';

import messages from './messages';

import './Campaigns.scss';

const Campaigns: React.FC = () => {
  const intl = useIntl();
  const { archiveById, bootstrap, deleteById, list = [] } = useCampaigns();

  useEffect(() => {
    bootstrap();
  }, []);

  const [createNewModalOpened, toggleCreateModal] = useState(false);

  return (
    <Section
      buttonText={intl.formatMessage(messages.createNew)}
      className="Campaigns"
      caption={intl.formatMessage(messages.caption)}
      title={intl.formatMessage(messages.title)}
      onButtonClick={() => toggleCreateModal(true)}
    >
      {list.length ? (
        <>
          <ul className="List">
            {list.map((campaign) => (
              <li key={campaign.id}>
                <div className="Status">
                  <StatusIcon name={campaign.status} />
                </div>
                <div className="Heading">
                  <h5>{campaign.name}</h5>
                  <p>
                    {intl.formatMessage(messages.started)}:{' '}
                    {moment(campaign.startedAt).format('DD.MM.YYYY HH:mm:ss')}
                  </p>
                </div>
                <div className="Progress">
                  {campaign.progress} / {campaign.total}
                </div>
                <div className="Actions">
                  <button
                    type="button"
                    onClick={() => archiveById(campaign.id)}
                  >
                    <FaArchive />
                  </button>
                  <button type="button" onClick={() => deleteById(campaign.id)}>
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))}
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
        </>
      ) : (
        <p>No items</p>
      )}
    </Section>
  );
};

export default Campaigns;
