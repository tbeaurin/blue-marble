/* eslint-disable import/no-unresolved */
import React from 'react';
import { Trans } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import 'reactjs-popup/dist/index.css';

import CustomLink from '../Components/CustomLink';
import { initializeCursor } from '../Functions/functions';

const Inventaire = () => {
  const pages = document.getElementsByClassName('page');
  const menuItems = Array.from(document.getElementsByClassName('menuItem'));
  const [y, setY] = React.useState(window.scrollY);

  React.useEffect(() => {
    document.querySelector('#fontStatic').classList.add('zoomed');
    document.querySelector('#fontCoulisses').classList.add('zoomed');
    document.querySelector('#fontMissio').classList.add('zoomedCoulisses');
    document.querySelector('#fontZones').classList.add('zoomedCoulisses');
    document.querySelector('#fontInventaire').classList.add('zoomedCoulisses');

    document.querySelector('#fontCoulisses').classList.remove('zoomedMissio');
    document.querySelector('#fontCoulisses').classList.remove('zoomedZones');
    document.querySelector('#fontCoulisses').classList.remove('zoomedInventaire');

    const images = [...document.querySelectorAll('.coulisses')];
    images.map((image) => image.classList.add('currentPage'));
    images.map((image) => image.classList.remove('focus'));

    // Don't display Wrapper on pages
    document.querySelector('#missioFakeWrapper').style.display = 'none';
    document.querySelector('#zonesFakeWrapper').style.display = 'none';
    document.querySelector('#inventaireFakeWrapper').style.display = 'none';
    document.querySelector('#coulissesFakeWrapper').style.display = 'none';

    initializeCursor();
  }, []);

  const drawAnchor = useDebouncedCallback((e) => {
    Array.from(pages).forEach((page) => {
      if (e.nativeEvent.srcElement.scrollTop <= page.offsetTop + 250
        && e.nativeEvent.srcElement.scrollTop >= page.offsetTop - 250) {
        menuItems.forEach((i) => i.classList.remove('active'));
        document.querySelector(`#${page.id}Anchor`).classList.add('active');
      }
    });
  }, [5]);

  const handleScroll = React.useCallback((e) => {
    drawAnchor(e);
    // PARALAXE
    document.querySelector('#coulissesStars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 50}px`;
    document.querySelector('#coulissesDessin').style.top = `-${e.nativeEvent.srcElement.scrollTop / 50}px`;
    document.querySelector('#coulissesConstelation').style.top = `-${e.nativeEvent.srcElement.scrollTop / 50}px`;
    document.querySelector('#stars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 150}px`;

    // SCROLLABLE MENU
    // BASE MARGIN TOP : 75PX
    if (y > e.nativeEvent.srcElement.scrollTop) {
      document.getElementById('mainHeader').style.top = '0';
      document.getElementById('content').style.marginTop = '100px';
      if (e.nativeEvent.srcElement.scrollTop > 75) {
        document.getElementById('mainHeader').style.marginTop = '0px';
      } else {
        document.getElementById('mainHeader').style.marginTop = `${75 - e.nativeEvent.srcElement.scrollTop}px`;
      }
    } else if (y < e.nativeEvent.srcElement.scrollTop) {
      if (isNaN(parseInt(document.getElementById('mainHeader').style.marginTop, 10)) || parseInt(document.getElementById('mainHeader').style.marginTop, 10) > 0) {
        document.getElementById('mainHeader').style.marginTop = `${75 - e.nativeEvent.srcElement.scrollTop}px`;
      }
      document.getElementById('mainHeader').style.top = '-100px';
      document.getElementById('content').style.marginTop = '0';
    }
    setY(e.nativeEvent.srcElement.scrollTop);
  }, [y, drawAnchor]);

  const handleClick = (e, anchor) => {
    e.preventDefault();
    document.querySelector(`#${anchor}`).scrollIntoView({ behavior: 'smooth' });
    menuItems.forEach((i) => i.classList.remove('active'));
    document.querySelector(`#${anchor}Anchor`).classList.add('active');
  };

  const renderMenu = () => (
    <nav id="menuZones" className="menu-page">
      <ul>
        <li className="menuItem" id="coulissesAnchor" onClick={(e) => handleClick(e, 'coulisses')}>
          <CustomLink
            href="#coulisses"
            tag="NavLink"
            content={<Trans i18nKey="Menu.coulisses.1" />}
          />
        </li>
        <li className="menuItem" id="coulisses1Anchor" onClick={(e) => handleClick(e, 'video')}>
          <CustomLink
            href="#video"
            tag="NavLink"
            content={<Trans i18nKey="Menu.coulisses.2" />}
          />
        </li>
        <li className="menuItem" id="coulisses2Anchor" onClick={(e) => handleClick(e, 'remerciement')}>
          <CustomLink
            href="#remerciement"
            tag="NavLink"
            content={<Trans i18nKey="Menu.coulisses.3" />}
          />
        </li>
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
      <div className="header" id="mainHeader">
        <div className="header-left">
          <span className="constelation-name">
            <Trans i18nKey="Coulisses.constelation" />
          </span>
          <h2 className="constelation-title">
            <Trans i18nKey="Coulisses.title" />
          </h2>
        </div>
        <div className="header-right">
          {renderMenu()}
        </div>
      </div>
      <div id="content" onScroll={(e) => handleScroll(e)}>
        <div className="page h-100" id="coulisses">
          <div className="page-content">
            <p className="citation">
              <span className="d-block citation-large"><Trans i18nKey="Coulisses.citation.1" /></span>
              <span className="d-block citation-small"><Trans i18nKey="Coulisses.citation.2" /></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventaire;
