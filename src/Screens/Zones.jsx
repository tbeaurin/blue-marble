/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Trans } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import 'reactjs-popup/dist/index.css';

import CustomLink from '../Components/CustomLink';
import Zone from '../Components/Zone';

import TestCarousel from '../assets/img/adrien.png';
import TestCarousel2 from '../assets/img/carousel1.png';
import TestCarousel3 from '../assets/img/adrien.png';
import TestCarousel4 from '../assets/img/carousel1.png';
import TestCarousel5 from '../assets/img/adrien.png';
import TestCarousel6 from '../assets/img/carousel1.png';
import { initializeCursor } from '../Functions/functions';

const Zones = () => {
  const pages = document.getElementsByClassName('page');
  const menuItems = Array.from(document.getElementsByClassName('menuItem'));
  const [y, setY] = React.useState(window.scrollY);

  const [openModal, setOpenModal] = React.useState([false, false, false, false, false]);

  const zone1 = [
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
    document.querySelector('#fontZones').classList.add('zoomed');
    document.querySelector('#fontMissio').classList.add('zoomedZones');
    document.querySelector('#fontInventaire').classList.add('zoomedZones');
    document.querySelector('#fontCoulisses').classList.add('zoomedZones');

    document.querySelector('#fontZones').classList.remove('zoomedMissio');
    document.querySelector('#fontZones').classList.remove('zoomedInventaire');
    document.querySelector('#fontZones').classList.remove('zoomedCoulisses');

    const images = [...document.querySelectorAll('.zones')];
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
    document.querySelector('#zonesStars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 20}px`;
    document.querySelector('#zonesDessin').style.top = `-${e.nativeEvent.srcElement.scrollTop / 20}px`;
    document.querySelector('#zonesConstelation').style.top = `-${e.nativeEvent.srcElement.scrollTop / 20}px`;
    document.querySelector('#stars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 60}px`;

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
        <li className="menuItem" id="zonesAnchor" onClick={(e) => handleClick(e, 'zones')}>
          <CustomLink
            href="#zones"
            tag="NavLink"
            content={<Trans i18nKey="Menu.zones.1" />}
          />
        </li>
        <li className="menuItem" id="zone1Anchor" onClick={(e) => handleClick(e, 'zone1')}>
          <CustomLink
            href="#zone1"
            tag="NavLink"
            content={<Trans i18nKey="Menu.zones.2" />}
          />
        </li>
        <li className="menuItem" id="zone2Anchor" onClick={(e) => handleClick(e, 'zone2')}>
          <CustomLink
            href="#zone2"
            tag="NavLink"
            content={<Trans i18nKey="Menu.zones.3" />}
          />
        </li>
        <li className="menuItem" id="zone3Anchor" onClick={(e) => handleClick(e, 'zone3')}>
          <CustomLink
            href="#zone3"
            tag="NavLink"
            content={<Trans i18nKey="Menu.zones.4" />}
          />
        </li>
        <li className="menuItem" id="zone4Anchor" onClick={(e) => handleClick(e, 'zone4')}>
          <CustomLink
            href="#zone4"
            tag="NavLink"
            content={<Trans i18nKey="Menu.zones.5" />}
          />
        </li>
        <li className="menuItem" id="zone5Anchor" onClick={(e) => handleClick(e, 'zone5')}>
          <CustomLink
            href="#zone5"
            tag="NavLink"
            content={<Trans i18nKey="Menu.zones.6" />}
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
            <Trans i18nKey="Zones.constelation" />
          </span>
          <h2 className="constelation-title">
            <Trans i18nKey="Zones.title" />
          </h2>
        </div>
        <div className="header-right">
          {renderMenu()}
        </div>
      </div>
      <div id="content" onScroll={(e) => handleScroll(e)}>
        <div className="page h-100" id="zones">
          <div className="page-content">
            <p className="citation">
              <Trans i18nKey="Zones.citation" />
            </p>
            <p className="citation-content">
              <span className="author"><Trans i18nKey="Zones.citation.author.1" /></span>
              <span className="source"><Trans i18nKey="Zones.citation.author.2" /></span>
            </p>
          </div>
        </div>
        <div className="page h-100" id="zone1">
          <Zone
            id="zone1"
            parent="Zones"
            handleOpenModal={handleOpenModal}
            carouselContent={zone1}
            direction="right"
            openModal={openModal}
            doubleLineTitle
            position={0}
          />
        </div>
        <div className="page h-100" id="zone2">
          <Zone
            id="zone2"
            parent="Zones"
            handleOpenModal={handleOpenModal}
            carouselContent={zone1}
            direction="left"
            openModal={openModal}
            position={1}
          />
        </div>
        <div className="page h-100" id="zone3">
          <Zone
            id="zone3"
            parent="Zones"
            handleOpenModal={handleOpenModal}
            carouselContent={zone1}
            direction="right"
            openModal={openModal}
            position={2}
          />
        </div>
        <div className="page h-100" id="zone4">
          <Zone
            id="zone4"
            parent="Zones"
            handleOpenModal={handleOpenModal}
            carouselContent={zone1}
            direction="left"
            openModal={openModal}
            position={3}
          />
        </div>
        <div className="page h-100" id="zone5">
          <Zone
            id="zone3"
            parent="Zones"
            handleOpenModal={handleOpenModal}
            carouselContent={zone1}
            direction="right"
            openModal={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Zones;
