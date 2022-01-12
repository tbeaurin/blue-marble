import React from 'react';
import { Trans } from 'react-i18next';

import logoANR from '../assets/img/logo-anr.png';
import logoEUL from '../assets/img/logo-eul.png';
import logoUNI from '../assets/img/logo-universite.png';
import CustomLink from '../Components/CustomLink';

import Menu from '../Components/Menu';
import { initializeCursor } from '../Functions/functions';

import starsMobile from '../assets/img/mobile/stars_mobile.png';
import starsMissioMobile from '../assets/img/mobile/stars_missio_mobile.png';
import constelationMissioMobile from '../assets/img/mobile/constelation_missio_mobile.png';
import dessinMissioMobile from '../assets/img/mobile/dessin_missio_mobile.png';
import starsZonesMobile from '../assets/img/mobile/stars_zones_mobile.png';
import constelationZonesMobile from '../assets/img/mobile/constelation_zones_mobile.png';
import dessinZonesMobile from '../assets/img/mobile/dessin_zones_mobile.png';
import starsInventaireMobile from '../assets/img/mobile/stars_inventaire_mobile.png';
import constelationInventaireMobile from '../assets/img/mobile/constelation_inventaire_mobile.png';
import dessinInventaireMobile from '../assets/img/mobile/dessin_inventaire_mobile.png';
import starsCoulissesMobile from '../assets/img/mobile/stars_coulisses_mobile.png';
import constelationCoulissesMobile from '../assets/img/mobile/constelation_coulisses_mobile.png';
import dessinCoulissesMobile from '../assets/img/mobile/dessin_coulisses_mobile.png';

const Home = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const isMobile = width <= 768;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    if (!isMobile) {
      initializeCursor();
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });

  React.useEffect(() => {
    if (!isMobile) {
      if (document.querySelector('#fontStatic')) {
        document.querySelector('#fontStatic').classList.remove('zoomed');
      }

      if (document.querySelector('#fontMissio')) {
        document.querySelector('#fontMissio').classList.remove('zoomed');
        document.querySelector('#fontMissio').classList.remove('zoomedZones');
        document.querySelector('#fontMissio').classList.remove('zoomedInventaire');
        document.querySelector('#fontMissio').classList.remove('zoomedCoulisses');
      }

      if (document.querySelector('#fontZones')) {
        document.querySelector('#fontZones').classList.remove('zoomed');
        document.querySelector('#fontZones').classList.remove('zoomedMissio');
        document.querySelector('#fontZones').classList.remove('zoomedInventaire');
        document.querySelector('#fontZones').classList.remove('zoomedCoulisses');
      }

      if (document.querySelector('#fontInventaire')) {
        document.querySelector('#fontInventaire').classList.remove('zoomed');
        document.querySelector('#fontInventaire').classList.remove('zoomedMissio');
        document.querySelector('#fontInventaire').classList.remove('zoomedZones');
        document.querySelector('#fontInventaire').classList.remove('zoomedCoulisses');
      }

      if (document.querySelector('#fontCoulisses')) {
        document.querySelector('#fontCoulisses').classList.remove('zoomed');
        document.querySelector('#fontCoulisses').classList.remove('zoomedMissio');
        document.querySelector('#fontCoulisses').classList.remove('zoomedZones');
        document.querySelector('#fontCoulisses').classList.remove('zoomedInventaire');
      }

      const imagesMissio = [...document.querySelectorAll('.missio:not(.stars)')];
      imagesMissio.map((image) => image.classList.remove('currentPage'));
      imagesMissio.map((image) => image.classList.add('background-hide'));

      const imagesZones = [...document.querySelectorAll('.zones:not(.stars)')];
      imagesZones.map((image) => image.classList.remove('currentPage'));
      imagesZones.map((image) => image.classList.add('background-hide'));

      const imagesInventaire = [...document.querySelectorAll('.inventaire:not(.stars)')];
      imagesInventaire.map((image) => image.classList.remove('currentPage'));
      imagesInventaire.map((image) => image.classList.add('background-hide'));

      const imagesCoulisses = [...document.querySelectorAll('.coulisses:not(.stars)')];
      imagesCoulisses.map((image) => image.classList.remove('currentPage'));
      imagesCoulisses.map((image) => image.classList.add('background-hide'));

      // Don't display Wrapper on pages
      document.querySelector('#missioFakeWrapper').style.display = 'block';
      document.querySelector('#zonesFakeWrapper').style.display = 'block';
      document.querySelector('#inventaireFakeWrapper').style.display = 'block';
      document.querySelector('#coulissesFakeWrapper').style.display = 'block';

      // Cancel top on pages scroll
      document.querySelector('#missioStars').style.top = 0;
      document.querySelector('#missioDessin').style.top = 0;
      document.querySelector('#missioConstelation').style.top = 0;
      document.querySelector('#zonesStars').style.top = 0;
      document.querySelector('#zonesDessin').style.top = 0;
      document.querySelector('#zonesConstelation').style.top = 0;
      document.querySelector('#inventaireStars').style.top = 0;
      document.querySelector('#inventaireDessin').style.top = 0;
      document.querySelector('#inventaireConstelation').style.top = 0;
      document.querySelector('#coulissesStars').style.top = 0;
      document.querySelector('#coulissesDessin').style.top = 0;
      document.querySelector('#coulissesConstelation').style.top = 0;
      document.querySelector('#stars').style.top = 0;
    }
  }, [isMobile]);

  return (
    <div id="home">
      <section id="homeLeft">
        <h1>
          <p><span className="small"><Trans i18nKey="Title.1" /></span></p>
          <span><Trans i18nKey="Title.2" /></span>
        </h1>
        <Menu />
        {isMobile && (
          <div id="font">
            <div id="fontStatic">
              {/* <img id="black" className="background" src={black} alt="etoiles" /> */}
              <img id="stars" className="background background-shape stars" src={starsMobile} alt="etoiles" />
            </div>
            <div id="fontMissio">
              <img className="dessin-mobile missio-mobile" src={dessinMissioMobile} alt="dessinMission" />
              <img className="dessin-mobile missio-mobile" src={constelationMissioMobile} alt="constelationMissio" />
              <img className="dessin-mobile missio-mobile" src={starsMissioMobile} alt="etoilesMissio" />
              <div id="missioName" className="constelation-name missio background-constelation-title">
                <span>
                  <Trans i18nKey="Missio.constelation" />
                </span>
                <h2 className="constelation-title">
                  <Trans i18nKey="Missio.title" />
                </h2>
              </div>
            </div>
            <div id="fontZones">
              <img className="dessin-mobile zones-mobile" src={dessinZonesMobile} alt="dessinZones" />
              <img className="dessin-mobile zones-mobile" src={constelationZonesMobile} alt="constelationZones" />
              <img className="dessin-mobile zones-mobile" src={starsZonesMobile} alt="etoilesZones" />
              <div id="zonesName" className="constelation-name zones background-constelation-title">
                <span>
                  <Trans i18nKey="Zones.constelation" />
                </span>
                <h2 className="constelation-title">
                  <Trans i18nKey="Zones.title" />
                </h2>
              </div>
            </div>
            <div id="fontInventaire">
              <img className="dessin-mobile inventaire-mobile" src={dessinInventaireMobile} alt="dessinInventaire" />
              <img className="dessin-mobile inventaire-mobile" src={constelationInventaireMobile} alt="constelationInventaire" />
              <img className="dessin-mobile inventaire-mobile" src={starsInventaireMobile} alt="etoilesInventaire" />
              <div id="inventaireName" className="constelation-name inventaire background-constelation-title">
                <span>
                  <Trans i18nKey="Inventaire.constelation" />
                </span>
                <h2 className="constelation-title">
                  <Trans i18nKey="Inventaire.title" />
                </h2>
              </div>
            </div>
            <div id="fontCoulisses">
              <img className="dessin-mobile coulisses-mobile" src={dessinCoulissesMobile} alt="dessinCoulisses" />
              <img className="dessin-mobile coulisses-mobile" src={constelationCoulissesMobile} alt="constelationCoulisses" />
              <img className="dessin-mobile coulisses-mobile" src={starsCoulissesMobile} alt="etoilesCoulisses" />
              <div id="coulissesName" className="constelation-name coulisses background-constelation-title">
                <span>
                  <Trans i18nKey="Coulisses.constelation" />
                </span>
                <h2 className="constelation-title">
                  <Trans i18nKey="Coulisses.title" />
                </h2>
              </div>
            </div>
          </div>
        )}
        <div className="logo-wrapper">
          <div className="logos">
            <img className="logo" src={logoUNI} alt="Université de Lyon" />
            <img className="logo" src={logoEUL} alt="Ecole Urbaine de Lyon" />
            <img className="logo" src={logoANR} alt="ANR" />
          </div>
          <div>
            <p id="anrText">
              <Trans i18nKey="Missio.footer.text" />
            </p>
          </div>
        </div>
      </section>
      <p>
        <CustomLink
          href="/mentions"
          tag="Link"
          className="mentions-link"
          content={<Trans i18nKey="Mentions.link" />}
        />
      </p>
    </div>
  );
};

export default Home;
