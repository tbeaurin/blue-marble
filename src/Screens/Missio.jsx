/* eslint-disable import/no-unresolved */
import React from 'react';
import { Trans } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';

import CustomLink from '../Components/CustomLink';

import QuentinImg from '../asset/img/Quentin.png';
import AdrienImg from '../asset/img/Adrien.png';
import LogoUni from '../asset/img/logo-uni-content.png';
import PhotoEul from '../asset/img/photo-groupe-eul.png';

import Facebook from '../asset/img/facebook_white.png';
import Internet from '../asset/img/internet_white.png';
import Instagram from '../asset/img/insta_white.png';
import Medium from '../asset/img/medium_white.png';
import Eul from '../asset/img/eul_white.png';
import Udl from '../asset/img/udl_white.png';
import Anr from '../asset/img/anr_white.png';

const Missio = () => {
  const pages = document.getElementsByClassName('page');
  const menuItems = Array.from(document.getElementsByClassName('menuItem'));
  const [y, setY] = React.useState(window.scrollY);

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
        && e.nativeEvent.srcElement.scrollTop >= page.offsetTop - 250 && page.id !== 'footer') {
        menuItems.forEach((i) => i.classList.remove('active'));
        document.querySelector(`#${page.id}Anchor`).classList.add('active');
      }
    });
  }, [5]);

  const handleScroll = React.useCallback((e) => {
    drawAnchor(e);
    // PARALAXE
    document.querySelector('#missioStars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 10}px`;
    document.querySelector('#missioDessin').style.top = `-${e.nativeEvent.srcElement.scrollTop / 10}px`;
    document.querySelector('#missioConstelation').style.top = `-${e.nativeEvent.srcElement.scrollTop / 10}px`;
    document.querySelector('#stars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 30}px`;

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
    <nav id="menuMissio" className="menu-page">
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
      <div id="missio">
        <div className="header" id="mainHeader">
          <div className="header-left">
            <span className="constelation-name">
              <Trans i18nKey="Missio.constelation" />
            </span>
            <h2 className="constelation-title">
              <Trans i18nKey="Missio.title" />
            </h2>
          </div>
          <div className="header-right">
            {renderMenu()}
          </div>
        </div>
        <div id="content" onScroll={(e) => handleScroll(e)}>
          <div className="page h-100" id="laMission">
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
          <div id="objectifMonde" className="page h-100">
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
                <div id="objectifMonde-content">
                  <h3>
                    <Trans i18nKey="Missio.objectifMonde.title" />
                  </h3>
                  <p><Trans i18nKey="Missio.objectifMonde.p1" /></p>
                  <p><Trans i18nKey="Missio.objectifMonde.p2" /></p>
                  <p><Trans i18nKey="Missio.objectifMonde.p3" /></p>
                </div>
              </div>
            </div>
          </div>
          <div id="anthropocene" className="page b-white">
            <div className="page-content">
              <span id="title-anthropocene">
                <Trans i18nKey="Missio.anthropocene.title" />
              </span>
              <div className="d-flex">
                <div id="anthropocene-definition">
                  <Trans i18nKey="Missio.anthropocene.definition" />
                </div>
                <div id="anthropocene-aditionnal">
                  <Trans i18nKey="Missio.anthropocene.aditionnal" />
                </div>
              </div>
            </div>
          </div>
          <div id="ecoleUrbaine" className="page">
            <div className="page-content">
              <div id="logoUni">
                <img src={LogoUni} alt="universite-lyon" />
                <div>
                  <h3>
                    <p><span><Trans i18nKey="Missio.ecole.logoUni.1" /></span></p>
                    <span><Trans i18nKey="Missio.ecole.logoUni.2" /></span>
                  </h3>
                  <h4><Trans i18nKey="Missio.ecole.logoUni.3" /></h4>
                </div>
              </div>
              <div className="content with-photo d-flex mt-32">
                <p className="important">
                  <Trans i18nKey="Missio.ecole.texte.1" />
                </p>
                <img src={PhotoEul} alt="groupe de l'EUL" />
              </div>
              <div className="content mt--100">
                <p>
                  <Trans i18nKey="Missio.ecole.texte.2" />
                </p>
                <p>
                  <Trans i18nKey="Missio.ecole.texte.3" />
                </p>
                <p>
                  <Trans i18nKey="Missio.ecole.texte.4" />
                </p>
                <p>
                  <Trans i18nKey="Missio.ecole.texte.5" />
                </p>
              </div>
              <div className="content d-flex mt-64">
                <div>
                  <h5><Trans i18nKey="Missio.ecole.subtitle.1" /></h5>
                  <ul>
                    <li><Trans i18nKey="Missio.ecole.list.1.1" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.2" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.3" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.4" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.5" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.6" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.7" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.8" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.9" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.10" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.11" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.12" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.13" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.14" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.15" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.16" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.17" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.1.18" /></li>
                  </ul>
                </div>
                <div>
                  <h5><Trans i18nKey="Missio.ecole.subtitle.2" /></h5>
                  <ul>
                    <li><Trans i18nKey="Missio.ecole.list.2.1" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.2.2" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.2.3" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.2.4" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.2.5" /></li>
                    <li><Trans i18nKey="Missio.ecole.list.2.6" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="footer" className="page h-100">
            <div className="d-flex flex-column align-items-center page-content">
              <div className="mw-450">
                <div>
                  <h3><Trans i18nKey="Missio.footer.1.1" /></h3>
                  <ul>
                    <li>
                      <img src={Internet} alt="site_web" />
                      <Trans i18nKey="Missio.footer.1.2" />
                    </li>
                    <li>
                      <img src={Medium} alt="medium" />
                      <Trans i18nKey="Missio.footer.1.3" />
                    </li>
                    <li>
                      <img src={Facebook} alt="facebook" />
                      <Trans i18nKey="Missio.footer.1.4" />
                    </li>
                    <li>
                      <img src={Instagram} alt="instagram" />
                      <Trans i18nKey="Missio.footer.1.5" />
                    </li>
                  </ul>
                </div>
                <div />
              </div>
              <div className="d-flex flex-row mt-64" id="footer-links">
                <div>
                  <img src={Udl} alt="université-de-lyon" />
                  <div>
                    <span className="uppercase"><Trans i18nKey="Missio.footer.2.1.1" /></span>
                    <span><Trans i18nKey="Missio.footer.2.1.2" /></span>
                  </div>
                </div>
                <div>
                  <img src={Eul} alt="école-urbaine-de-lyon" />
                  <span className="uppercase"><Trans i18nKey="Missio.footer.2.2" /></span>
                </div>
                <div>
                  <img src={Anr} alt="ANR" />
                </div>
              </div>
              <div id="footer-text" className="mt-32 mw-700">
                <span><Trans i18nKey="Missio.footer.text" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missio;
