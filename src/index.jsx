import React from 'react';

import './styles.css';

import { render } from 'react-dom';

import App from './App';

const images = {
  logo: './assets/logo.png',
};

const props = {
  images,
};

render(<App {...props} />, document.getElementById('App'));
