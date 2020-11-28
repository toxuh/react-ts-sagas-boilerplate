import React from 'react';
import { useIntl } from 'react-intl';

import useDummy from './useDummy';

import messages from './messages';

const Dummy: React.FC = () => {
  const intl = useIntl();
  const { addDummy, dummies } = useDummy();

  return (
    <>
      <h3>{intl.formatMessage(messages.dummies)}:</h3>
      <button type="button" onClick={() => addDummy()}>
        {intl.formatMessage(messages.addDummy)}
      </button>
      <ul>
        {dummies.map((dummy) => (
          <li key={dummy.id}>{dummy.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Dummy;
