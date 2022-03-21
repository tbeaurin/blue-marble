import './App.scss';
import './assets/scss/transitions.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { Trans } from 'react-i18next';

import { initializeCursor, openCursor } from './Functions/functions';

import Home from './Screens/Home';
import Missio from './Screens/Missio';
import Zones from './Screens/Zones';
import Inventaire from './Screens/Inventaire';
import Coulisses from './Screens/Coulisses';
import Mentions from './Screens/Mentions';
import NotFound from './Screens/NotFound';

import black from './assets/img/black.png';
import stars from './assets/img/stars.png';
import etoilesMissio from './assets/img/etoilesMission.svg';
import etoilesZone from './assets/img/etoilesZones.svg';
import etoilesInventaire from './assets/img/etoilesInventaire.svg';
import etoilesCoulisses from './assets/img/etoilesCoulisses.svg';
import constelationMissio from './assets/img/constelationMission.svg';
import dessinMission from './assets/img/dessinMission.svg';
import constelationZones from './assets/img/constelationZones.svg';
import dessinZones from './assets/img/dessinZones.svg';
import constelationInventaire from './assets/img/constelationInventaire.svg';
import dessinInventaire from './assets/img/dessinInventaire.svg';
import constelationCoulisses from './assets/img/constelationCoulisses.svg';
import dessinCoulisses from './assets/img/dessinCoulisses.svg';

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const isMobile = width <= 768;

  const isProd = window.location.hostname.search('programmebluemarble') !== -1 && window.location.hostname.search('netlify') === -1;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMove = React.useCallback((e) => {
    if (!isMobile) {
      e.persist();
      let clientX = -100;
      let clientY = -100;
      const innerCursor = document.querySelector('.cursor--small');
      const outerCursor = document.querySelector('.cursor--ext');
      clientX = e.clientX;
      clientY = e.clientY;

      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        outerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      };
      requestAnimationFrame(render);
    }
  }, [isMobile]);

  const handleMouseEnter = (constelation) => {
  // Focus to images
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.remove('lose-focus'));
    images.map((image) => image.classList.add('focus'));
    // Cursor
    openCursor();
    // Menu
    document.querySelector(`#${constelation}Link a`).classList.add('focus');
  };

  const handleMouseLeave = React.useCallback((constelation) => {
  // Focus to images
    const images = [...document.querySelectorAll(`.${constelation}`)];
    if (images) {
      images.map((image) => image.classList.add('lose-focus'));
      images.map((image) => image.classList.remove('focus'));
    }
    // Cursor
    if (!isMobile) {
      initializeCursor();
    }
    // Menu
    const constelationDiv = document.querySelector(`#${constelation}Link a`);
    if (constelationDiv) {
      constelationDiv.classList.remove('focus');
    }
  }, [isMobile]);

  const handleClick = (constelation) => {
    document.querySelector(`#${constelation}Link a`).click();
  };

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
  }, [isMobile]);

  const MainRouter = withRouter(({ location }) => (
    <TransitionGroup>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route exact path="/missio" component={Missio} />
        <Route exact path="/zones" component={Zones} />
        <Route exact path="/inventaire" component={Inventaire} />
        <Route exact path="/coulisses" component={Coulisses} />
        <Route exact path="/mentions" component={Mentions} />
        <Route component={NotFound} />
      </Switch>
    </TransitionGroup>
  ));

  return (
    <>
      <div className="App" onMouseMove={(e) => { handleMove(e); }}>
        {!isMobile && (
          <>
            <div className="cursor cursor--small" />
            <div className="cursor cursor--ext" />
            <div
              id="missioFakeWrapper"
              onClick={() => { handleClick('missio'); }}
              onMouseEnter={() => { handleMouseEnter('missio'); }}
              onMouseLeave={() => { handleMouseLeave('missio'); }}
            />
            <div
              id="zonesFakeWrapper"
              onClick={() => { handleClick('zones'); }}
              onMouseEnter={() => { handleMouseEnter('zones'); }}
              onMouseLeave={() => { handleMouseLeave('zones'); }}
            />
            <div
              id="inventaireFakeWrapper"
              onClick={() => { handleClick('inventaire'); }}
              onMouseEnter={() => { handleMouseEnter('inventaire'); }}
              onMouseLeave={() => { handleMouseLeave('inventaire'); }}
            />
            <div
              id="coulissesFakeWrapper"
              onClick={() => { handleClick('coulisses'); }}
              onMouseEnter={() => { handleMouseEnter('coulisses'); }}
              onMouseLeave={() => { handleMouseLeave('coulisses'); }}
            />
            <div id="font">
              <div id="fontStatic">
                <img id="black" className="background" src={black} alt="etoiles" />
                <img id="stars" className="background background-shape stars" src={stars} alt="etoiles" />
              </div>
              <div id="fontMissio">
                <img id="missioDessin" className="background background-hide missio dessin" src={dessinMission} alt="dessinMission" />
                <img id="missioConstelation" className="background background-hide missio constelation" src={constelationMissio} alt="constelationMissio" />
                <img id="missioStars" className="background missio stars" src={etoilesMissio} alt="etoilesMissio" />
                <span id="missioName" className="constelation-name missio background-constelation-title">
                  <Trans i18nKey="Missio.constelation" />
                </span>
              </div>
              <div id="fontZones">
                <img id="zonesDessin" className="background background-hide zones dessin" src={dessinZones} alt="dessinZones" />
                <img id="zonesConstelation" className="background background-hide zones constelation" src={constelationZones} alt="constelationZones" />
                <img id="zonesStars" className="background zones stars" src={etoilesZone} alt="etoilesZone" />
                <span id="zonesName" className="constelation-name zones background-constelation-title">
                  <Trans i18nKey="Zones.constelation" />
                </span>
              </div>
              <div id="fontInventaire">
                <img id="inventaireDessin" className="background background-hide inventaire dessin" src={dessinInventaire} alt="dessinInventaire" />
                <img id="inventaireConstelation" className="background background-hide inventaire constelation" src={constelationInventaire} alt="constelationInventaire" />
                <img id="inventaireStars" className="background inventaire stars" src={etoilesInventaire} alt="etoilesInventaire" />
                <span id="inventaireName" className="constelation-name inventaire background-constelation-title">
                  <Trans i18nKey="Inventaire.constelation" />
                </span>
              </div>
              <div id="fontCoulisses">
                <img id="coulissesDessin" className="background background-hide coulisses dessin" src={dessinCoulisses} alt="dessinCoulisses" />
                <img id="coulissesConstelation" className="background background-hide coulisses constelation" src={constelationCoulisses} alt="constelationCoulisses" />
                <img id="coulissesStars" className="background coulisses stars" src={etoilesCoulisses} alt="etoilesCoulisses" />
                <span id="coulissesName" className="constelation-name coulisses background-constelation-title">
                  <Trans i18nKey="Coulisses.constelation" />
                </span>
              </div>
            </div>
          </>
        )}
        <main style={{ position: 'absolute', zIndex: 1000 }}>
          <Router>
            <MainRouter />
          </Router>
        </main>
      </div>
    </>
  );
};

export default App;
