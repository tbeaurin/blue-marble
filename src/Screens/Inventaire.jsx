/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Trans } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import 'reactjs-popup/dist/index.css';

import inventaireImg from '../assets/img/mobile/inventaire_interne.png';
import inventaireContentImg from '../assets/img/inventaire.png';
import BlueMarbleImg from '../assets/img/blue-marble.png';
import zone4Img from '../assets/img/zone4.png';
import zone1Img from '../assets/img/zone1.png';
import inventaire5 from '../assets/img/inventaire5.png';
import inventaire6 from '../assets/img/inventaire6.png';

import CustomLink from '../Components/CustomLink';
import Zone from '../Components/Zone';
import { initializeCursor } from '../Functions/functions';

import imagesStudio from '../Components/Imports/Studio';

const Inventaire = () => {
  const pages = document.getElementsByClassName('page');
  const menuItems = Array.from(document.getElementsByClassName('menuItem'));
  const [y, setY] = React.useState(window.scrollY);
  const [width, setWidth] = React.useState(window.innerWidth);
  const isMobile = width <= 768;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const [openModal, setOpenModal] = React.useState([false, false]);

  const studio = [];

  for (let i = 1; i <= 30; i += 1) {
    studio.push(
      {
        image: imagesStudio[i - 1], description: `Popup.studio.description${i}`, important: `Popup.studio.description${i}.important`, link: `Popup.studio.description${i}.link`,
      },
    );
  }

  React.useEffect(() => {
    if (!isMobile) {
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
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [isMobile]);

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
        {!isMobile && (
          <>
            <li className="menuItem" id="studioAnchor" onClick={(e) => handleClick(e, 'studio')}>
              <CustomLink
                href="#studio"
                tag="NavLink"
                content={<Trans i18nKey="Menu.inventaire.1" />}
              />
            </li>
            <li className="menuItem" id="analyseAnchor" onClick={(e) => handleClick(e, 'analyse')}>
              <CustomLink
                href="#analyse"
                tag="NavLink"
                content={<Trans i18nKey="Menu.inventaire.2" />}
              />
            </li>
          </>
        )}
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
        {isMobile ? (
          <>
            {renderMenu()}
            <img src={inventaireImg} alt="dessin_zones" />
            <h2 className="constelation-title">
              <Trans i18nKey="Inventaire.title" />
            </h2>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div id="content" onScroll={(e) => handleScroll(e)}>
        <div id="inventaire" className="page h-100">
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
        <div className="page h-100" id="analyse">
          <Zone
            id="studio"
            parent="Inventaire"
            handleOpenModal={handleOpenModal}
            carouselContent={studio}
            direction="right"
            openModal={openModal}
            position={0}
          />
        </div>
        <div id="analyse">
          <div id="analyse1" className={`page ${!isMobile ? 'h-120' : ''}`}>
            <div className="page-content">
              <div id="analyse-column1" className={`${isMobile ? 'h-100vh' : ''}`}>
                <h3>
                  <Trans i18nKey="Inventaire.analyse.title" />
                </h3>
                <p><Trans i18nKey="Inventaire.analyse.p1" /></p>
              </div>
              <div id="analyse-column2">
                <div id="analyseImg-wrapper">
                  <img src={BlueMarbleImg} alt="blue marble" />
                  <span className="small-italic d-block w-100"><Trans i18nKey="Inventaire.analyse.aditionnal.1" /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="column1">
              <div className="citation-blue-wrapper">
                <span className="citation-blue"><Trans i18nKey="Inventaire.analyse.2.citation" /></span>
                <span className="citation-blue-little"><Trans i18nKey="Inventaire.analyse.2.aditionnal" /></span>
              </div>
              <p><Trans i18nKey="Inventaire.analyse.2.p1" /></p>
              <p><Trans i18nKey="Inventaire.analyse.2.p2" /></p>
              <p><Trans i18nKey="Inventaire.analyse.2.p3" /></p>
              <p><Trans i18nKey="Inventaire.analyse.2.p4" /></p>
            </div>
            <div className="column2">
              <div id="analyseImg-wrapper">
                <img src={zone4Img} alt="zone 4" />
                <span className="small d-block w-100"><Trans i18nKey="Inventaire.analyse.2.aditionnal.1" /></span>
                <span className="small-italic d-block w-100"><Trans i18nKey="Inventaire.analyse.2.aditionnal.2" /></span>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="left">
            <div className="column1">
              <div id="analyseImg-wrapper">
                <img src={zone1Img} alt="zone 1" />
                <span className="small d-block w-100"><Trans i18nKey="Inventaire.analyse.3.aditionnal.1" /></span>
                <span className="small-italic d-block w-100"><Trans i18nKey="Inventaire.analyse.3.aditionnal.2" /></span>
              </div>
            </div>
            <div className="column2">
              <p><Trans i18nKey="Inventaire.analyse.3.p1" /></p>
              <p><Trans i18nKey="Inventaire.analyse.3.p2" /></p>
            </div>
          </div>
          <div className="right">
            <div className="column1">
              <p><Trans i18nKey="Inventaire.analyse.4.p1" /></p>
              <p><Trans i18nKey="Inventaire.analyse.4.p2" /></p>
              <p><Trans i18nKey="Inventaire.analyse.4.p3" /></p>
            </div>
            <div className="column2">
              <div id="analyseImg-wrapper">
                <img src={inventaireContentImg} alt="inventaire" />
                <span className="small d-block w-100"><Trans i18nKey="Inventaire.analyse.4.aditionnal.1" /></span>
                <span className="small-italic d-block w-100"><Trans i18nKey="Inventaire.analyse.4.aditionnal.2" /></span>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="column1">
              <div id="analyseImg-wrapper">
                <img src={inventaire5} alt="zone 5" />
                <span className="small d-block w-100"><Trans i18nKey="Inventaire.analyse.5.aditionnal.1" /></span>
                <span className="small-italic d-block w-100"><Trans i18nKey="Inventaire.analyse.5.aditionnal.2" /></span>
              </div>
            </div>
            <div className="column2">
              <p><Trans i18nKey="Inventaire.analyse.5.p1" /></p>
              <p><Trans i18nKey="Inventaire.analyse.5.p2" /></p>
              <p><Trans i18nKey="Inventaire.analyse.5.p3" /></p>
              <p><Trans i18nKey="Inventaire.analyse.5.p4" /></p>
            </div>
          </div>
          <div className="right">
            <div className="column1">
              <p><Trans i18nKey="Inventaire.analyse.6.p1" /></p>
              <p><Trans i18nKey="Inventaire.analyse.6.p2" /></p>
              <p><Trans i18nKey="Inventaire.analyse.6.p3" /></p>
              <p><Trans i18nKey="Inventaire.analyse.6.p4" /></p>
            </div>
            <div className="column2">
              <div id="analyseImg-wrapper">
                <img src={inventaire6} alt="zone4" />
                <span className="small d-block w-100"><Trans i18nKey="Inventaire.analyse.6.aditionnal.1" /></span>
                <span className="small-italic d-block w-100"><Trans i18nKey="Inventaire.analyse.6.aditionnal.2" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventaire;
