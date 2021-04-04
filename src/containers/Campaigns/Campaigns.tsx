import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';

import { Modal, Pagination, Section } from '../../components';

import NewCampaign from '../Forms/NewCampaign/NewCampaign';

import useCampaigns from './useCampaigns';

import messages from './messages';

import './Campaigns.scss';

const Campaigns: React.FC = () => {
  const intl = useIntl();
  const {
    archiveById,
    createNewCampaign,
    deleteById,
    fetchCampaignsList,
    isLoading,
    list,
    pages,
  } = useCampaigns();

  useEffect(() => {
    if (typeof list === 'undefined') {
      fetchCampaignsList();
    }
  }, [list]);

  const [createNewModalOpened, toggleCreateModal] = useState(false);

  return (
    <Section
      buttonText={intl.formatMessage(messages.createNew)}
      className="Campaigns"
      caption={intl.formatMessage(messages.caption)}
      isLoading={isLoading}
      loadingText={intl.formatMessage(messages.loading)}
      title={intl.formatMessage(messages.title)}
      onButtonClick={() => toggleCreateModal(true)}
    >
      {list?.length ? (
        <>
          <ul className="List">
            {list.map((campaign) => (
              <li key={campaign.id}>
                <div className="Thumbnail">
                  <img src={campaign.thumbnail} alt={campaign.title} />
                </div>
                <div className="Heading">
                  <h5
                    dangerouslySetInnerHTML={{ __html: campaign.title }}
                    title={campaign.title}
                  />
                  <p>
                    {intl.formatMessage(messages.created)}:{' '}
                    {moment(campaign.created).format('DD.MM.YYYY HH:mm:ss')}
                  </p>
                </div>
                {campaign.type && (
                  <div className="Type">
                    {intl.formatMessage(messages[campaign.type])}
                  </div>
                )}
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
          {pages.pages > 1 && (
            <Pagination
              count={pages.count}
              current={pages.current}
              limit={pages.limit}
              pages={pages.pages}
              handleClick={(p) => fetchCampaignsList(p)}
            />
          )}
        </>
      ) : (
        <div className="NoItems">{intl.formatMessage(messages.noItems)}.</div>
      )}
      <Modal
        isOpened={createNewModalOpened}
        onClose={() => toggleCreateModal(false)}
      >
        <div>
          <h4>{intl.formatMessage(messages.newCampaign)}</h4>
          <NewCampaign
            handleCloseModal={() => toggleCreateModal(false)}
            handleSubmitForm={(data) => {
              createNewCampaign(data);
              toggleCreateModal(false);
            }}
          />
        </div>
      </Modal>
    </Section>
  );
};

export default Campaigns;
