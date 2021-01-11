import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';

import { Button } from '../../components';

import useSign from './useSign';

import messages from './messages';

import './Sign.scss';

const SignIn: React.FC = () => {
  const intl = useIntl();

  const { login } = useSign();

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: login,
  });

  return (
    <div className="Sign">
      <form onSubmit={handleSubmit}>
        <h3>{intl.formatMessage(messages.login)}</h3>
        <label htmlFor="email">
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
            {intl.formatMessage(messages.loginSubmit)}
          </Button>
          <Link to="/sign-up">{intl.formatMessage(messages.notAMember)}</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
