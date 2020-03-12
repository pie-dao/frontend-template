import React from 'react';
import { view } from 'react-easy-state';

const year = (new Date()).getFullYear();

const Footer = () => (
  <div className="footer-container">
    <div className="left">
      <span className="footer-link lg:block">
        PieDAO&nbsp;
        { year }
      </span>
    </div>
    <div className="right lg:ml-8">
      <a
        className="footer-link lg:block"
        href="https://discord.gg/eJTYNUF"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord
      </a>
      &nbsp;
      <a
        className="footer-link lg:ml-8"
        href="https://twitter.com/PieDAO_DeFi?s=20"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      &nbsp;
      <a
        className="footer-link lg:ml-8"
        href="https://medium.com/piedao"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medium
      </a>
      &nbsp;
      <a
        className="footer-link lg:ml-8"
        href="https://forum.piedao.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Forum
      </a>
      &nbsp;
      <a
        className="footer-link lg:ml-8"
        href="https://docs.piedao.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
      &nbsp;
      <a
        className="footer-link lg:ml-8"
        href="hhttps://github.com/pie-dao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      &nbsp;
      <img src="/assets/img/aragon.svg" className="aragon lg:ml-20px lg:mt-0" alt="Argon" />
    </div>
  </div>
);

export default view(Footer);
