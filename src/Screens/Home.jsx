import React from 'react';
import { Trans } from 'react-i18next';
import ReactGA from 'react-ga';

import logoANR from '../assets/img/logo-anr.png';
import logoEUL from '../assets/img/logo-eul.png';
import logoUNI from '../assets/img/logo-universite.png';
import CustomLink from '../Components/CustomLink';

import Menu from '../Components/Menu';
import { initializeCursor } from '../Functions/functions';

const Home = () => {
  React.useEffect(() => {
    document.querySelector('#fontStatic').classList.remove('zoomed');

    document.querySelector('#fontMissio').classList.remove('zoomed');
    document.querySelector('#fontMissio').classList.remove('zoomedZones');
    document.querySelector('#fontMissio').classList.remove('zoomedInventaire');
    document.querySelector('#fontMissio').classList.remove('zoomedCoulisses');

    document.querySelector('#fontZones').classList.remove('zoomed');
    document.querySelector('#fontZones').classList.remove('zoomedMissio');
    document.querySelector('#fontZones').classList.remove('zoomedInventaire');
    document.querySelector('#fontZones').classList.remove('zoomedCoulisses');

    document.querySelector('#fontInventaire').classList.remove('zoomed');
    document.querySelector('#fontInventaire').classList.remove('zoomedMissio');
    document.querySelector('#fontInventaire').classList.remove('zoomedZones');
    document.querySelector('#fontInventaire').classList.remove('zoomedCoulisses');

    document.querySelector('#fontCoulisses').classList.remove('zoomed');
    document.querySelector('#fontCoulisses').classList.remove('zoomedMissio');
    document.querySelector('#fontCoulisses').classList.remove('zoomedZones');
    document.querySelector('#fontCoulisses').classList.remove('zoomedInventaire');

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

    initializeCursor();
    ReactGA.pageview('Home');
  }, []);

  return (
    <div id="home">
      <section id="homeLeft">
        <h1>
          <p><span className="small"><Trans i18nKey="Title.1" /></span></p>
          <span><Trans i18nKey="Title.2" /></span>
        </h1>
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
        <Menu />
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
