type News = {
  date: string;
  preview: string;
  text: string;
  title?: string;
};

const news: News[] = [
  {
    date: 'Tue Jan 05 2021 10:45:33 GMT+0100 (Central European Standard Time)',
    preview: 'Small text',
    text: 'Large text',
    title: 'We are open!',
  },
  {
    date: 'Tue Jan 05 2021 10:46:34 GMT+0100 (Central European Standard Time)',
    preview: 'New without title',
    text: 'Large text',
  },
  {
    date: 'Tue Jan 05 2021 10:47:35 GMT+0100 (Central European Standard Time)',
    preview: 'Small text',
    text: 'Large text',
    title: 'We are open!',
  },
  {
    date: 'Tue Jan 05 2021 10:48:36 GMT+0100 (Central European Standard Time)',
    preview: 'Small text',
    text: 'Large text',
    title: 'We are open!',
  },
  {
    date: 'Tue Jan 05 2021 10:49:37 GMT+0100 (Central European Standard Time)',
    preview: 'New without title',
    text: 'Large text',
  },
];

export default news;
