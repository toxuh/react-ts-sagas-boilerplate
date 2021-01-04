import React from 'react';

import './Section.scss';

type Props = {
  children: React.ReactNode;
  description?: string;
  title?: string;
};

const Section: React.FC<Props> = ({ children, title }) => (
  <section className="Section">
    {title && <h1>{title}</h1>}
    {children}
  </section>
);

export default Section;
