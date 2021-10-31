import './App.scss';
import './asset/scss/transitions.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import Home from './Screens/Home';
import Missio from './Screens/Missio';
import Zones from './Screens/Zones';

import black from './asset/img/black.png';
import stars from './asset/img/stars.png';
import starsMissio from './asset/img/starsMissio.png';
import starsZone from './asset/img/starsZone.png';
import starsInventory from './asset/img/starsInventory.png';
import starsBackstage from './asset/img/starsBackstage.png';
import constelationMissio from './asset/img/constelationMissio.png';
import dessinMissio from './asset/img/dessinMissio.png';
import constelationZones from './asset/img/constelationZones.png';
import dessinZones from './asset/img/dessinZones.png';
import constelationInventaire from './asset/img/constelationInventaire.png';
import dessinInventaire from './asset/img/dessinInventaire.png';
import constelationCoulisses from './asset/img/constelationCoulisses.png';
import dessinCoulisses from './asset/img/dessinCoulisses.png';

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMove = (e) => {
    e.persist();
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector('.cursor--small');
    clientX = e.clientX;
    clientY = e.clientY;

    const render = () => {
      innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };
    requestAnimationFrame(render);
  };

  const handleMouseEnter = (constelation) => {
  // Focus to images
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.remove('lose-focus'));
    images.map((image) => image.classList.add('focus'));
    // Cursor
    const render = () => {
      document.querySelector('.cursor--small').classList.add('large');
    };
    requestAnimationFrame(render);
    // Menu
    document.querySelector(`#${constelation}Link a`).classList.add('focus');
    document.querySelector('.cursor--small').classList.add('large');
  };

  const handleMouseLeave = (constelation) => {
  // Focus to images
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.add('lose-focus'));
    images.map((image) => image.classList.remove('focus'));
    // Cursor
    const render = () => {
      document.querySelector('.cursor--small').classList.remove('large');
    };
    requestAnimationFrame(render);
    // Menu
    document.querySelector(`#${constelation}Link a`).classList.remove('focus');
    document.querySelector('.cursor--small').classList.remove('large');
  };

  const handleClick = (constelation) => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.add('active'));
    document.querySelector(`#${constelation}Link a`).click();
  };

  const MainRouter = withRouter(({ location }) => (
    <TransitionGroup>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/missio" component={Missio} />
        <Route path="/zones" component={Zones} />
      </Switch>
    </TransitionGroup>
  ));

  return (
    <div className="App" onMouseMove={(e) => { handleMove(e); }}>
      <div className="cursor cursor--small" />
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
          <img className="background" id="black" src={black} alt="etoiles" />
          <img id="stars" className="background background-shape stars" src={stars} alt="etoiles" />
        </div>
        <div id="fontMissio">
          <img id="missioStars" className="background background-shape missio starsMissio" src={starsMissio} alt="etoilesMissio" />
          <img id="missioConstelation" className="background background-hide missio constelation" src={constelationMissio} alt="constelationMissio" />
          <img id="missioDessin" className="background background-hide missio dessin" src={dessinMissio} alt="dessinMissio" />
        </div>
        <div id="fontZones">
          <img id="zonesStars" className="background background-shape zones starsZones" src={starsZone} alt="etoilesZone" />
          <img className="background background-hide zones constelation" src={constelationZones} alt="constelationZones" />
          <img className="background background-hide zones dessin" src={dessinZones} alt="dessinZones" />
        </div>
        <div id="fontInventaire">
          <img className="background background-shape" src={starsInventory} alt="etoilesInventaire" />
          <img className="background background-hide inventaire constelation" src={constelationInventaire} alt="constelationInventaire" />
          <img className="background background-hide inventaire dessin" src={dessinInventaire} alt="dessinInventaire" />
        </div>
        <div id="fontCoulisses">
          <img className="background background-shape" src={starsBackstage} alt="etoilesCoulisses" />
          <img className="background background-hide coulisses constelation" src={constelationCoulisses} alt="constelationCoulisses" />
          <img className="background background-hide coulisses dessin" src={dessinCoulisses} alt="dessinCoulisses" />
        </div>
      </div>
      <main style={{ position: 'absolute', zIndex: 1000 }}>
        <Router>
          <MainRouter />
        </Router>
      </main>
    </div>
  );
};

export default App;
