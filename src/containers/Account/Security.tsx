import React from 'react';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import { FaShieldAlt } from 'react-icons/fa';

import { Card, Input } from '../../components';

import messages from './messages';
import './Security.scss';

type Props = {
  is2FactorAuthentication: boolean;
};

const Security: React.FC<Props> = ({ is2FactorAuthentication }) => {
  const intl = useIntl();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      is2FactorAuthentication,
      password: '',
      confirmPassword: '',
    },
    onSubmit: () => {},
  });

  return (
    <Card
      className="Security"
      title={intl.formatMessage(messages.security)}
      icon={<FaShieldAlt />}
    >
      <form onSubmit={handleSubmit}>
        <article>
          <div className="Label">
            <label htmlFor="is2FactorAuthentication">
              2-factor authentication
            </label>
            <div className="Description">Description</div>
          </div>
          <div className="Field">
            <Input
              type="checkbox"
              id="is2FactorAuthentication"
              name="is2FactorAuthentication"
              checked={values.is2FactorAuthentication}
              onChange={handleChange}
            />
          </div>
        </article>
        <article>
          <div className="Label">
            <label htmlFor="password">Current password</label>
            <div className="Description">Description</div>
          </div>
          <div className="Field">
            <Input
              type="password"
              id="password"
              name="password"
              defaultValue={values.password}
              onChange={handleChange}
            />
          </div>
        </article>
        <article>
          <div className="Label">
            <label htmlFor="confirmPassword">New password</label>
            <div className="Description">Description</div>
          </div>
          <div className="Field">
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              defaultValue={values.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </article>
      </form>
    </Card>
  );
};

export default Security;
