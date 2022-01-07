/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Trans } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import 'reactjs-popup/dist/index.css';

import CustomLink from '../Components/CustomLink';
import Zone from '../Components/Zone';
import { initializeCursor } from '../Functions/functions';

import TestCarousel from '../assets/img/adrien.jpg';
import TestCarousel2 from '../assets/img/carousel1.png';
import TestCarousel3 from '../assets/img/adrien.jpg';
import TestCarousel4 from '../assets/img/carousel1.png';
import TestCarousel5 from '../assets/img/adrien.jpg';
import TestCarousel6 from '../assets/img/carousel1.png';

const Inventaire = () => {
  const pages = document.getElementsByClassName('page');
  const menuItems = Array.from(document.getElementsByClassName('menuItem'));
  const [y, setY] = React.useState(window.scrollY);

  const [openModal, setOpenModal] = React.useState([false, false]);

  const inventaire1 = [
    {
      image: TestCarousel, description: <Trans i18nKey="Popup.zone1.description1" />, important: <Trans i18nKey="Popup.zone1.description1.important" />, link: 'www.sondekla.com/user/event/12046',
    },
    { image: TestCarousel2, description: <Trans i18nKey="Popup.zone1.description2" /> },
    { image: TestCarousel3, description: <Trans i18nKey="Popup.zone1.description3" /> },
    { image: TestCarousel4, description: <Trans i18nKey="Popup.zone1.description4" /> },
    { image: TestCarousel5, description: <Trans i18nKey="Popup.zone1.description5" /> },
    { image: TestCarousel6, description: <Trans i18nKey="Popup.zone1.description6" /> },
  ];

  React.useEffect(() => {
    document.querySelector('#fontStatic').classList.add('zoomed');
    document.querySelector('#fontInventaire').classList.add('zoomed');
    document.querySelector('#fontMissio').classList.add('zoomedInventaire');
    document.querySelector('#fontZones').classList.add('zoomedInventaire');
    document.querySelector('#fontCoulisses').classList.add('zoomedInventaire');

    document.querySelector('#fontInventaire').classList.remove('zoomedMissio');
    document.querySelector('#fontInventaire').classList.remove('zoomedZones');
    document.querySelector('#fontInventaire').classList.remove('zoomedCoulisses');

    const images = [...document.querySelectorAll('.inventaire')];
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
        && e.nativeEvent.srcElement.scrollTop >= page.offsetTop - 250 && page.id) {
        menuItems.forEach((i) => i.classList.remove('active'));
        document.querySelector(`#${page.id}Anchor`).classList.add('active');
      }
    });
  }, [5]);

  const handleScroll = React.useCallback((e) => {
    drawAnchor(e);
    // PARALAXE
    document.querySelector('#inventaireStars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 50}px`;
    document.querySelector('#inventaireDessin').style.top = `-${e.nativeEvent.srcElement.scrollTop / 50}px`;
    document.querySelector('#inventaireConstelation').style.top = `-${e.nativeEvent.srcElement.scrollTop / 50}px`;

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

  const handleOpenModal = React.useCallback((i, direction) => {
    const zoneH2 = Array.from(document.getElementsByClassName('zone-h2'))[i];
    const zoneSubtitle = Array.from(document.getElementsByClassName('zone-subtitle'))[i];
    if (openModal[i]) {
      const popupContent = Array.from(document.getElementsByClassName('popup-content'))[0];
      popupContent.classList.add('inactive');
      popupContent.classList.add(direction === 'right' ? 'right' : 'left');
      zoneH2.classList.remove(direction === 'right' ? 'popup-active-right' : 'popup-active-left');
      zoneSubtitle.classList.remove(direction === 'right' ? 'popup-active-right' : 'popup-active-left');
      setTimeout(() => {
        setOpenModal((openModal) => openModal.map((m, n) => {
          if (n === i) {
            return false;
          }
          return m;
        }));
      }, 800);
    } else {
      setOpenModal((openModal) => openModal.map((m, n) => {
        if (n === i) {
          return true;
        }
        return m;
      }));
      zoneH2.classList.add(direction === 'right' ? 'popup-active-right' : 'popup-active-left');
      zoneSubtitle.classList.add(direction === 'right' ? 'popup-active-right' : 'popup-active-left');
    }
  }, [openModal]);

  const renderMenu = () => (
    <nav id="menuZones" className="menu-page">
      <ul>
        <li className="menuItem" id="studioAnchor" onClick={(e) => handleClick(e, 'studio')}>
          <CustomLink
            href="#studio"
            tag="NavLink"
            content={<Trans i18nKey="Menu.inventaire.2" />}
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
            <Trans i18nKey="Inventaire.constelation" />
          </span>
          <h2 className="constelation-title">
            <Trans i18nKey="Inventaire.title" />
          </h2>
        </div>
        <div className="header-right">
          {renderMenu()}
        </div>
      </div>
      <div id="content" onScroll={(e) => handleScroll(e)}>
        <div className="page h-100">
          <div className="page-content">
            <p className="citation">
              <span className="d-block"><Trans i18nKey="Inventaire.citation.1" /></span>
              <span className="d-block"><Trans i18nKey="Inventaire.citation.2" /></span>
            </p>
            <p className="citation-content">
              <span className="author"><Trans i18nKey="Inventaire.citation.author.1" /></span>
              <span className="source"><Trans i18nKey="Inventaire.citation.author.2" /></span>
            </p>
          </div>
        </div>
        <div className="page h-100" id="studio">
          <Zone
            id="studio"
            parent="Inventaire"
            handleOpenModal={handleOpenModal}
            carouselContent={inventaire1}
            direction="right"
            openModal={openModal}
            position={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Inventaire;
