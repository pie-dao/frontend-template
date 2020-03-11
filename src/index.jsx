import React from 'react';

import './styles.css';

import { render } from 'react-dom';

import App from './App';

const images = {
  logo: '/assets/logo.png',
};

const content = {
  name: 'PieDAO - Top investment for everyone',
  seo: {
    description: 'The richest people in the World have gained 10% every year for the past 10 '
      + 'years. We think it is fair for you to make some real money too.',
    discord: {
      description: 'Redirecting to PieDAO Discord Channel',
      keywords: 'Community, Discord, ETF, Investment, Rebalancing, Robo advisor, ethereum,'
        + 'ethereum wallet, wallet, crypto wallet, decentralized app, dapps',
      title: 'Dexwallet Discord Channel',
    },
    image: '/assets/img/preview.jpg',
    keywords: 'ETF, Investment, Rebalancing, Robo advisor, ethereum, ethereum wallet, wallet, '
      + 'crypto wallet, decentralized app, dapps',
  },
  url: 'https://piedao.org/',
};

const props = {
  content,
  images,
};

render(<App {...props} />, document.getElementById('App'));
