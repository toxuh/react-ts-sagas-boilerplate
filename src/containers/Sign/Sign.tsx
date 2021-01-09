import React from 'react';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';

import { Button } from '../../components';

import useSign from './useSign';

import messages from './messages';

import './Sign.scss';

const Sign: React.FC = () => {
  const intl = useIntl();

  const { register } = useSign();

  const initialValues = {
    email: '',
    password: '',
    username: '',
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: register,
  });

  return (
    <div className="Sign">
      <form onSubmit={handleSubmit}>
        <h3>{intl.formatMessage(messages.title)}</h3>
        <label htmlFor="username">
          {intl.formatMessage(messages.username)}:
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="username">
          {intl.formatMessage(messages.email)}:
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="username">
          {intl.formatMessage(messages.password)}:
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <div className="ButtonHolder">
          <Button htmlType="submit" type="primary">
            {intl.formatMessage(messages.submit)}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Sign;
