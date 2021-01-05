import React from 'react';

import './Section.scss';

type Props = {
  caption?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
};

const Section: React.FC<Props> = ({
  caption,
  children,
  className = '',
  title,
}) => (
  <section className="Section">
    {title && <h1>{title}</h1>}
    {caption && <p className="Caption">{caption}</p>}
    <main className={className}>{children}</main>
  </section>
);

export default Section;
