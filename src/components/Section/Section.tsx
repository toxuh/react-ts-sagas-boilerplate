import React from 'react';
import { useIntl } from 'react-intl';
import { FaSync } from 'react-icons/fa';

import messages from './messages';

import './Section.scss';

type Props = {
  buttonText?: string;
  caption?: string;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  title?: string;
  onButtonClick?: () => void;
};

const Section: React.FC<Props> = ({
  buttonText,
  caption,
  children,
  className = '',
  isLoading = false,
  loadingText,
  title,
  onButtonClick,
}) => {
  const intl = useIntl();

  return (
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
      <main className={className}>
        {isLoading ? (
          <div className="Loader">
            <FaSync />
            <span>
              {loadingText || intl.formatMessage(messages.defaultLoadingText)}
            </span>
          </div>
        ) : (
          children
        )}
      </main>
    </section>
  );
};

export default Section;
