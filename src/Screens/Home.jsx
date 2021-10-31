import React from 'react';

import logoANR from '../asset/img/logo-anr.png';
import logoEUL from '../asset/img/logo-eul.png';
import logoUNI from '../asset/img/logo-universite.png';

import Menu from '../Components/Menu';

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

    const imagesMissio = [...document.querySelectorAll('.missio')];
    imagesMissio.map((image) => image.classList.remove('currentPage'));
    imagesMissio.map((image) => image.classList.remove('focus'));

    const imagesZones = [...document.querySelectorAll('.zones')];
    imagesZones.map((image) => image.classList.remove('currentPage'));
    imagesZones.map((image) => image.classList.remove('focus'));

    const imagesInventaire = [...document.querySelectorAll('.inventaire')];
    imagesInventaire.map((image) => image.classList.remove('currentPage'));
    imagesInventaire.map((image) => image.classList.remove('focus'));

    const imagesCoulisses = [...document.querySelectorAll('.coulisses')];
    imagesCoulisses.map((image) => image.classList.remove('currentPage'));
    imagesCoulisses.map((image) => image.classList.remove('focus'));

    // Don't display Wrapper on pages
    document.querySelector('#missioFakeWrapper').style.display = 'block';
    document.querySelector('#zonesFakeWrapper').style.display = 'block';
    document.querySelector('#inventaireFakeWrapper').style.display = 'block';
    document.querySelector('#coulissesFakeWrapper').style.display = 'block';

    // Cancel top on missio scroll
    document.querySelector('#missioStars').style.top = 0;
    document.querySelector('#missioDessin').style.top = 0;
    document.querySelector('#missioConstelation').style.top = 0;
    document.querySelector('#stars').style.top = 0;
  }, []);

  return (
    <div id="home">
      <section id="homeLeft">
        <h1>
          <p><span className="small">Programme</span></p>
          <span>Blue Marble</span>
        </h1>
        <div className="logos">
          <img className="logo" src={logoEUL} alt="Ecole Urbaine de Lyon" />
          <img className="logo" src={logoUNI} alt="Université de Lyon" />
          <img className="logo" src={logoANR} alt="ANR" />
        </div>
        <div>
          <p id="anrText">Ce travail a bénéficié de l’aide de l’Etat gérée par l’Agence Nationale de la Recherche au titre du programme d’Investissements d’avenir portant la référence ANR-17-CONV-0004</p>
        </div>
        <Menu />
      </section>
    </div>
  );
};

export default Home;
