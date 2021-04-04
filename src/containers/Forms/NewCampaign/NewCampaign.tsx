import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';

import { Button } from '../../../components';

import { CreateNewCampaignType } from '../../../common/campaigns/types';

import useForm from './useForm';
import messages from './messages';

import './NewCampaign.scss';

type Props = {
  handleCloseModal: () => void;
  handleSubmitForm: (data: CreateNewCampaignType) => void;
  initialValues?: CreateNewCampaignType;
};

const NewCampaign: React.FC<Props> = ({
  handleCloseModal,
  handleSubmitForm,
  initialValues = {
    channel_id: '',
    channel_title: '',
    description: '',
    duration: 0,
    link: '',
    video_publish_date: '',
    thumbnail: '',
    title: '',
    total: 0,
    type: 'views',
  },
}) => {
  const intl = useIntl();
  const { data, fetchVideoInfo } = useForm();
  const [videoData, setVideoData] = useState(data);

  const {
    values,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setValues,
  } = useFormik({
    initialValues,
    onSubmit: (d) => {
      handleSubmitForm(d);
      resetForm();
      setVideoData(undefined);
    },
  });

  const onCancel = () => {
    handleReset(initialValues);
    handleCloseModal();
  };

  useEffect(() => {
    if (data) {
      setVideoData(data);
    }
  }, [data]);

  useEffect(() => {
    if (videoData) {
      setValues({
        ...values,
        channel_id: videoData.channelId,
        channel_title: videoData.channelTitle,
        description: videoData.description,
        video_publish_date: videoData.publishedAt,
        thumbnail: videoData.thumbnails.default.url,
        title: videoData.title,
      });
    }
  }, [videoData]);

  const onVideoLinkChange = (e: { target: { value: string } }) => {
    handleChange(e);
    fetchVideoInfo(e.target.value);
  };

  return (
    <div className="NewCampaign">
      <form onSubmit={handleSubmit}>
        <div className="FormField">
          <label htmlFor="type">
            {intl.formatMessage(messages.type)}:
            <select
              id="type"
              name="type"
              defaultValue={values.type}
              onBlur={handleChange}
            >
              <option value="views">
                {intl.formatMessage(messages.views)}
              </option>
              <option value="likes">
                {intl.formatMessage(messages.likes)}
              </option>
              <option value="subscribers">
                {intl.formatMessage(messages.subscribers)}
              </option>
              <option value="comments">
                {intl.formatMessage(messages.comments)}
              </option>
            </select>
          </label>
        </div>
        <div className="FormField">
          <label htmlFor="link">
            {intl.formatMessage(messages.link)}:
            <input
              type="text"
              id="link"
              name="link"
              placeholder="https://www.youtube.com/watch?v=xxxxxxx"
              value={values.link}
              onChange={onVideoLinkChange}
            />
          </label>
        </div>
        <div className="FormField">
          <label htmlFor="duration">
            {intl.formatMessage(messages.duration)}:
            <input
              type="number"
              id="duration"
              name="duration"
              value={values.duration}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="FormField">
          <label htmlFor="count">
            {intl.formatMessage(messages.count)}:
            <input
              type="number"
              id="total"
              name="total"
              value={values.total}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="ButtonHolder">
          <Button htmlType="submit" type="primary">
            {intl.formatMessage(messages.submit)}
          </Button>
          <Button htmlType="button" onClick={onCancel}>
            {intl.formatMessage(messages.cancel)}
          </Button>
        </div>
      </form>
      <div>
        {videoData && (
          <div className="Preview">
            <img src={videoData.thumbnails.high.url} alt={videoData.title} />
            <h4 dangerouslySetInnerHTML={{ __html: videoData.title }} />
          </div>
        )}
        <h5>
          {intl.formatMessage(messages.cost)}: <span>3500</span>
        </h5>
      </div>
    </div>
  );
};

export default NewCampaign;
