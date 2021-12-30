import React from 'react';
import { Trans } from 'react-i18next';
import CustomLink from './CustomLink';

const Menu = () => (
  <nav className="menu menuHome">
    <ul>
      <li className="menuItem" id="missioLink">

        <CustomLink
          href="/missio"
          content={<Trans i18nKey="Menu.mission" />}
          tag="NavLink"
        />
      </li>
      <li className="menuItem" id="zonesLink">
        <CustomLink
          href="/zones"
          content={<Trans i18nKey="Menu.zones" />}
          tag="NavLink"
        />
      </li>
      <li className="menuItem" id="inventaireLink">
        <CustomLink
          href="/inventaire"
          content={<Trans i18nKey="Menu.inventaire" />}
          tag="NavLink"
        />
      </li>
      <li className="menuItem" id="coulissesLink">
        <CustomLink
          href="/coulisses"
          content={<Trans i18nKey="Menu.coulisses" />}
          tag="NavLink"
        />
      </li>
    </ul>
  </nav>
);
export default Menu;
