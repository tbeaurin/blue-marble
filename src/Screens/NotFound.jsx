/* eslint-disable import/no-unresolved */
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Trans } from 'react-i18next';

import CustomLink from '../Components/CustomLink';

import { initializeCursor } from '../Functions/functions';

const NotFound = () => {
  React.useEffect(() => {
    // Don't display Wrapper on pages
    document.querySelector('#missioFakeWrapper').style.display = 'none';
    document.querySelector('#zonesFakeWrapper').style.display = 'none';
    document.querySelector('#inventaireFakeWrapper').style.display = 'none';
    document.querySelector('#coulissesFakeWrapper').style.display = 'none';

    initializeCursor();
  }, []);

  return (
    <div className="main">
      <div id="content" style={{ marginTop: 0 }}>
        <div className="page h-100 m-auto align-items-center flex-column justiy-content-center">
          <h1>
            <Trans i18nKey="404.404" />
          </h1>
          <h1>
            <Trans i18nKey="404.text" />
          </h1>
          <CustomLink
            href="/"
            tag="Link"
            className="primary ta-right"
            content={<Trans i18nKey="404.link.text" />}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
