import React from 'react';
import { Trans } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';

import CustomLink from '../Components/CustomLink';

import QuentinImg from '../asset/img/Quentin.png';
import AdrienImg from '../asset/img/Adrien.png';

const Missio = () => {
  const pages = document.getElementsByClassName('page');
  const menuItems = Array.from(document.getElementsByClassName('menuItem'));

  React.useEffect(() => {
    document.querySelector('#fontStatic').classList.add('zoomed');
    document.querySelector('#fontMissio').classList.add('zoomed');
    document.querySelector('#fontZones').classList.add('zoomedMissio');
    document.querySelector('#fontInventaire').classList.add('zoomedMissio');
    document.querySelector('#fontCoulisses').classList.add('zoomedMissio');

    document.querySelector('#fontMissio').classList.remove('zoomedZones');
    document.querySelector('#fontMissio').classList.remove('zoomedInventaire');
    document.querySelector('#fontMissio').classList.remove('zoomedCoulisses');

    const images = [...document.querySelectorAll('.missio')];
    images.map((image) => image.classList.add('currentPage'));
    images.map((image) => image.classList.remove('focus'));
    // images.map((image) => image.classList.remove('background-hide'));

    // Don't display Wrapper on pages
    document.querySelector('#missioFakeWrapper').style.display = 'none';
    document.querySelector('#zonesFakeWrapper').style.display = 'none';
    document.querySelector('#inventaireFakeWrapper').style.display = 'none';
    document.querySelector('#coulissesFakeWrapper').style.display = 'none';
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

  const handleScroll = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    // centerPage(e);
    drawAnchor(e);
    // Change menu class here
    document.querySelector('#missioStars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 10}px`;
    document.querySelector('#missioDessin').style.top = `-${e.nativeEvent.srcElement.scrollTop / 10}px`;
    document.querySelector('#missioConstelation').style.top = `-${e.nativeEvent.srcElement.scrollTop / 10}px`;
    document.querySelector('#stars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 30}px`;
    // const pages = document.getElementsByClassName('page');
  };

  const handleClick = (e, anchor) => {
    e.preventDefault();
    document.querySelector(`#${anchor}`).scrollIntoView({ behavior: 'smooth' });
    menuItems.forEach((i) => i.classList.remove('active'));
    document.querySelector(`#${anchor}Anchor`).classList.add('active');
  };

  const renderMenu = () => (
    <nav id="menuMissio">
      <ul>
        <li className="menuItem" id="laMissionAnchor" onClick={(e) => handleClick(e, 'laMission')}>
          <CustomLink
            href="#laMission"
            tag="NavLink"
            content={<Trans i18nKey="Menu.missio.laMission" />}
          />
        </li>
        <li className="menuItem" id="objectifMondeAnchor" onClick={(e) => handleClick(e, 'objectifMonde')}>
          <CustomLink
            href="#objectifMonde"
            tag="NavLink"
            content={<Trans i18nKey="Menu.missio.objectifMonde" />}
          />
        </li>
        <li className="menuItem" id="anthropoceneAnchor" onClick={(e) => handleClick(e, 'anthropocene')}>
          <CustomLink
            href="#anthropocene"
            tag="NavLink"
            content={<Trans i18nKey="Menu.missio.anthropocene" />}
          />
        </li>
        <li className="menuItem" id="ecoleUrbaineAnchor" onClick={(e) => handleClick(e, 'ecoleUrbaine')}>
          <CustomLink
            href="#ecoleUrbaine"
            tag="NavLink"
            content={<Trans i18nKey="Menu.missio.ecoleUrbaine" />}
          />
        </li>
        <li className="menuItem" id="ecoleUrbaineAnchor">
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
      <div id="missio">
        <div className="header">
          <div className="header-left">
            <span className="constelation-name">Missio</span>
            <h2>La mission</h2>
          </div>
          <div className="header-right">
            {renderMenu()}
          </div>
        </div>
        <div className="content" onScroll={(e) => handleScroll(e)}>
          <div className="page" id="laMission">
            <div className="page-content">
              <p className="citation">
                <Trans i18nKey="Missio.citation" />
              </p>
              <p className="citation-content">
                <span className="author"><Trans i18nKey="Missio.citation.author.1" /></span>
                <span className="explication"><Trans i18nKey="Missio.citation.author.2" /></span>
                <span className="source"><Trans i18nKey="Missio.citation.author.3" /></span>
              </p>
            </div>
          </div>
          <div id="objectifMonde" className="page">
            <div className="page-content">
              <div className="d-flex">
                <div>
                  <div className="major">
                    <div className="zoomedImgContainer" id="imgMajorQ">
                      <img src={QuentinImg} alt="major Q" />
                    </div>
                    <div className="c-black imgDescription" id="descriptionMajorQ">
                      <span className="title imgDescriptionTitle d-block c-primary">
                        <Trans i18nKey="Missio.majorQ.title" />
                      </span>
                      <span className="d-block imgDescriptionContent">
                        <b><Trans i18nKey="Missio.majorQ.content.1" /></b>
                      </span>
                      <span className="d-block imgDescriptionContent">
                        <Trans i18nKey="Missio.majorQ.content.2" />
                      </span>
                    </div>
                  </div>
                  <div className="major">
                    <div className="zoomedImgContainer" id="imgMajorA">
                      <img src={AdrienImg} alt="major A" />
                    </div>
                    <div className="c-black imgDescription" id="descriptionMajorA">
                      <span className="title imgDescriptionTitle d-block c-primary">
                        <Trans i18nKey="Missio.majorA.title" />
                      </span>
                      <span className="d-block imgDescriptionContent">
                        <b><Trans i18nKey="Missio.majorA.content.1" /></b>
                      </span>
                      <span className="d-block imgDescriptionContent">
                        <Trans i18nKey="Missio.majorA.content.2" />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>Objectif Monde</h1>
                </div>
              </div>
            </div>
          </div>
          <div id="anthropocene" className="page">
            <div className="page-content">
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
            </div>
          </div>
          <div id="ecoleUrbaine" className="page">
            <div className="page-content">
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
              <Trans i18nKey="Missio.citation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missio;
