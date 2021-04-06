import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';

import { Button } from '../../components';

import useSign from './useSign';

import messages from './messages';

import './Sign.scss';

const SignUp: React.FC = () => {
  const intl = useIntl();

  const { isRegistrationCompleted, register } = useSign();

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: register,
  });

  if (isRegistrationCompleted) {
    return (
      <div className="Sign">
        <p>
          Now <Link to="sign-in">log in</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="Sign">
      <form onSubmit={handleSubmit}>
        <h3>{intl.formatMessage(messages.title)}</h3>

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
        <label htmlFor="password">
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
          <Link to="/sign-in">
            {intl.formatMessage(messages.alreadyRegistered)}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
