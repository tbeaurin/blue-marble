/* eslint-disable import/no-unresolved */
import React from 'react';
import 'reactjs-popup/dist/index.css';

import CustomLink from '../Components/CustomLink';

const NotFound = () => (
  <div className="main">
    <p>
      Désolé, la page que vous demandez nexiste pas
    </p>
    <CustomLink
      href="/"
      tag="Link"
      className="primary ta-right"
      content={"Revenir à l'acceuil"}
    />
  </div>
);

export default NotFound;
