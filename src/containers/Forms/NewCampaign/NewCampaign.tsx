import React from 'react';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';

import { Button } from '../../../components';

import messages from './messages';

import './NewCampaign.scss';

type Props = {
  handleCloseModal: () => void;
  handleSubmitForm: (data: Record<string, unknown>) => void;
  initialValues?: {
    count: number;
    link: string;
    duration: number;
    type: 'views' | 'likes' | 'subscribers' | 'comments';
  };
};

const NewCampaign: React.FC<Props> = ({
  handleCloseModal,
  handleSubmitForm,
  initialValues = {
    count: 0,
    link: '',
    duration: 0,
    type: 'views',
  },
}) => {
  const intl = useIntl();

  const { values, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleSubmitForm,
  });

  const onCancel = () => {
    handleReset(initialValues);
    handleCloseModal();
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
              onChange={handleChange}
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
              id="count"
              name="count"
              value={values.count}
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
        <h5>
          {intl.formatMessage(messages.cost)}: <span>3500</span>
        </h5>
      </div>
    </div>
  );
};

export default NewCampaign;
