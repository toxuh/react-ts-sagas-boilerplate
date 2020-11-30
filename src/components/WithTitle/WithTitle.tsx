import React from 'react';

type WithTitleType = {
  title: string;
  children: React.ReactNode;
};

const WithTitle: React.FC<WithTitleType> = ({ children, title }) => (
  <>
    <h3>{title}</h3>
    <section>{children}</section>
  </>
);

export default WithTitle;
