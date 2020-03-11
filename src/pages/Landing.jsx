/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

const Landing = () => {
  return (
    <div className="text-center">
      Welcome to the PieDAO Frontend Template. View the&nbsp;
      <a href="https://docs.piedao.org/development-resources/frontend-template">docs</a>
      &nbsp;to find out more.
    </div>
  );
};

export default view(Landing);
