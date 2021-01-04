import React from 'react';

import './Section.scss';

type Props = {
  caption?: string;
  children: React.ReactNode;
  title?: string;
};

const Section: React.FC<Props> = ({ caption, children, title }) => (
  <section className="Section">
    {title && <h1>{title}</h1>}
    {caption && <p className="Caption">{caption}</p>}
    <main>{children}</main>
  </section>
);

export default Section;
