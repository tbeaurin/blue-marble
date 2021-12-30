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
    images.map((image) => image.classList.remove('focus'));
    images.map((image) => image.classList.add('lose-focus'));
    document.querySelector(`#${constelation}Link a`).classList.remove('focus');
  };

  return (
    <nav className="menu menuHome">
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
    </nav>
  );
};

export default Menu;
