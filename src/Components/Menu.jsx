import React from 'react';
import { Trans } from 'react-i18next';
import CustomLink from './CustomLink';

const Menu = () => {
  const handleMouseEnter = (constelation) => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.remove('lose-focus'));
    images.map((image) => image.classList.add('focus'));
    document.querySelector(`#${constelation}Link a`).classList.add('focus');
  };

  const handleMouseLeave = (constelation) => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.add('lose-focus'));
    images.map((image) => image.classList.remove('focus'));
    document.querySelector(`#${constelation}Link a`).classList.remove('focus');
  };
  const handleClick = (constelation) => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map((image) => image.classList.add('active'));
  };

  return (
    <nav className="menu menuHome">
      <ul>
        <li className="menuItem" id="missioLink" onClick={() => { handleClick('missio'); }}>

          <CustomLink
            href="/missio"
            content={<Trans i18nKey="Menu.mission" />}
            tag="NavLink"
            onClick={() => { handleClick('missio'); }}
            onMouseEnter={() => { handleMouseEnter('missio'); }}
            onMouseLeave={() => { handleMouseLeave('missio'); }}
          />
        </li>
        <li className="menuItem" id="zonesLink" onClick={() => { handleClick('zones'); }}>
          <CustomLink
            href="/zones"
            content={<Trans i18nKey="Menu.zones" />}
            tag="NavLink"
            onClick={() => handleClick('zones')}
            onMouseEnter={() => { handleMouseEnter('zones'); }}
            onMouseLeave={() => { handleMouseLeave('zones'); }}
          />
        </li>
        <li className="menuItem" id="inventaireLink" onClick={() => { handleClick('inventaire'); }}>
          <CustomLink
            href="/inventaire"
            content={<Trans i18nKey="Menu.inventaire" />}
            tag="NavLink"
            onClick={() => handleClick('inventaire')}
            onMouseEnter={() => { handleMouseEnter('inventaire'); }}
            onMouseLeave={() => { handleMouseLeave('inventaire'); }}
          />
        </li>
        <li className="menuItem" id="coulissesLink" onClick={() => { handleClick('coulisses'); }}>
          <CustomLink
            href="/coulisses"
            content={<Trans i18nKey="Menu.coulisses" />}
            tag="NavLink"
            onClick={() => handleClick('coulisses')}
            onMouseEnter={() => { handleMouseEnter('coulisses'); }}
            onMouseLeave={() => { handleMouseLeave('coulisses'); }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
