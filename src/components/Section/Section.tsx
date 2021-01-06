import React from 'react';

import './Section.scss';

type Props = {
  buttonText?: string;
  caption?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  onButtonClick?: () => void;
};

const Section: React.FC<Props> = ({
  buttonText,
  caption,
  children,
  className = '',
  title,
  onButtonClick,
}) => (
  <section className="Section">
    {title && (
      <h1>
        {title}
        {buttonText && (
          <button type="button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </h1>
    )}
    {caption && <p className="Caption">{caption}</p>}
    <main className={className}>{children}</main>
  </section>
);

export default Section;
