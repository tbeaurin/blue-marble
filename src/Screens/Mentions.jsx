/* eslint-disable import/no-unresolved */
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Trans } from 'react-i18next';

import CustomLink from '../Components/CustomLink';

import { initializeCursor } from '../Functions/functions';

const Mentions = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const isMobile = width <= 768;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    // Don't display Wrapper on pages
    if (!isMobile) {
      document.querySelector('#missioFakeWrapper').style.display = 'none';
      document.querySelector('#zonesFakeWrapper').style.display = 'none';
      document.querySelector('#inventaireFakeWrapper').style.display = 'none';
      document.querySelector('#coulissesFakeWrapper').style.display = 'none';

      initializeCursor();
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [isMobile]);

  const renderMenu = () => (
    <nav id="menuMissio" className="menu-page">
      <ul>
        <li className="menuItem">
          <CustomLink
            href="/"
            tag="NavLink"
            className="uppercase"
            content={<Trans i18nKey="Menu.accueil" />}
          />
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="main">
      <div className="header mentions" id="mainHeader">
        {isMobile ? (
          <>
            {renderMenu()}
          </>
        ) : (
          <div className="header-right">
            {renderMenu()}
          </div>
        )}
      </div>
      <div id="content" style={{ marginTop: 0, overflow: 'hidden' }}>
        <div
          className="page h-100 m-auto align-items-center flex-column justiy-content-center text-align-center p-80"
          id="pageMentions"
        >
          <h3>
            <Trans i18nKey="Mentions.title" />
          </h3>
          <div style={{ marginBottom: 16 }}>
            <h2>
              <Trans i18nKey="Mentions.title.1" />
            </h2>
            <span>
              <Trans i18nKey="Mentions.text.1" />
            </span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <h2>
              <Trans i18nKey="Mentions.title.2" />
            </h2>
            <span>
              <Trans i18nKey="Mentions.text.2" />
            </span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <h2>
              <Trans i18nKey="Mentions.title.3" />
            </h2>
            <span>
              <Trans i18nKey="Mentions.text.3" />
            </span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <h2>
              <Trans i18nKey="Mentions.title.4" />
            </h2>
            <span>
              <Trans i18nKey="Mentions.text.4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentions;
