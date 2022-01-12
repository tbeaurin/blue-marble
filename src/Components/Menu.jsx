import React from 'react';
import { Trans } from 'react-i18next';
import CustomLink from './CustomLink';

const Menu = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const isMobile = width <= 768;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });
  const handleMouseEnter = (constelation) => {
    if (!isMobile) {
      const images = [...document.querySelectorAll(`.${constelation}`)];
      images.map((image) => image.classList.remove('lose-focus'));
      images.map((image) => image.classList.add('focus'));
      document.querySelector(`#${constelation}Link a`).classList.add('focus');
    }
  };

  const handleMouseLeave = (constelation) => {
    if (!isMobile) {
      const images = [...document.querySelectorAll(`.${constelation}`)];
      images.map((image) => image.classList.remove('focus'));
      images.map((image) => image.classList.add('lose-focus'));
      document.querySelector(`#${constelation}Link a`).classList.remove('focus');
    }
  };

  const handleOpenMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    if (!isMobileOpen) {
      document.querySelector('#fontMissio').classList.add('hidden');
      document.querySelector('#fontZones').classList.add('hidden');
      document.querySelector('#fontInventaire').classList.add('hidden');
      document.querySelector('#fontCoulisses').classList.add('hidden');
    } else {
      document.querySelector('#fontMissio').classList.remove('hidden');
      document.querySelector('#fontZones').classList.remove('hidden');
      document.querySelector('#fontInventaire').classList.remove('hidden');
      document.querySelector('#fontCoulisses').classList.remove('hidden');
    }
  };

  return (
    <nav className="menu menuHome">
      {isMobile && (
        <div id="burger" className={isMobileOpen ? 'open' : ''} onClick={() => handleOpenMenu()}>
          <div className="burger-line" id="line1" />
          <div className="burger-line" id="line2" />
          <div className="burger-line" id="line3" />
        </div>
      )}
      {!isMobile && (
        <ul>
          <li className="menuItem" id="missioLink">

            <CustomLink
              href="/missio"
              content={<Trans i18nKey="Menu.mission" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('missio'); }}
              onMouseLeave={() => { handleMouseLeave('missio'); }}
            />
          </li>
          <li className="menuItem" id="zonesLink">
            <CustomLink
              href="/zones"
              content={<Trans i18nKey="Menu.zones" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('zones'); }}
              onMouseLeave={() => { handleMouseLeave('zones'); }}
            />
          </li>
          <li className="menuItem" id="inventaireLink">
            <CustomLink
              href="/inventaire"
              content={<Trans i18nKey="Menu.inventaire" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('inventaire'); }}
              onMouseLeave={() => { handleMouseLeave('inventaire'); }}
            />
          </li>
          <li className="menuItem" id="coulissesLink">
            <CustomLink
              href="/coulisses"
              content={<Trans i18nKey="Menu.coulisses" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('coulisses'); }}
              onMouseLeave={() => { handleMouseLeave('coulisses'); }}
            />
          </li>
        </ul>
      )}
      {isMobile && (
        <ul className={`menu-mobile ${isMobileOpen ? 'open' : ''}`}>
          <li className="menuItem" id="missioLink">
            <CustomLink
              href="/missio"
              content={<Trans i18nKey="Menu.mission" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('missio'); }}
              onMouseLeave={() => { handleMouseLeave('missio'); }}
            />
          </li>
          <li className="menuItem" id="zonesLink">
            <CustomLink
              href="/zones"
              content={<Trans i18nKey="Menu.zones" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('zones'); }}
              onMouseLeave={() => { handleMouseLeave('zones'); }}
            />
          </li>
          <li className="menuItem" id="inventaireLink">
            <CustomLink
              href="/inventaire"
              content={<Trans i18nKey="Menu.inventaire" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('inventaire'); }}
              onMouseLeave={() => { handleMouseLeave('inventaire'); }}
            />
          </li>
          <li className="menuItem" id="coulissesLink">
            <CustomLink
              href="/coulisses"
              content={<Trans i18nKey="Menu.coulisses" />}
              tag="NavLink"
              onMouseEnter={() => { handleMouseEnter('coulisses'); }}
              onMouseLeave={() => { handleMouseLeave('coulisses'); }}
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Menu;
