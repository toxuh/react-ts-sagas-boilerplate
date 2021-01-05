import React from 'react';
import moment from 'moment';

import './NewsFeed.scss';

type NewsType = {
  date: string;
  preview: string;
  text: string;
  title?: string;
};

type Props = {
  data: NewsType[];
};

const NewsFeed: React.FC<Props> = ({ data = [] }) => {
  return (
    <section className="NewsFeed">
      {Boolean(data.length) &&
        data.map((item) => (
          <article key={item.date}>
            {item.title && <h5>{item.title}</h5>}
            <div className="Text">{item.preview}</div>
            <div className="Date">
              {moment(item.date).format('DD.MM.YYYY hh:mm')}
            </div>
          </article>
        ))}
    </section>
  );
};

export default NewsFeed;
