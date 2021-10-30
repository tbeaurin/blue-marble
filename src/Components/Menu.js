import React from "react"
import CustomLink from "./CustomLink"

const Menu = () => {

  const handleMouseEnter = constelation => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map(image => image.classList.remove("lose-focus"));
    images.map(image => image.classList.add("focus"));
    document.querySelector(`#${constelation}Link a`).classList.add('focus');
  }

  const handleMouseLeave = constelation => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map(image => image.classList.add("lose-focus"));
    images.map(image => image.classList.remove("focus"));
    document.querySelector(`#${constelation}Link a`).classList.remove('focus');
  }
  const handleClick = constelation => {
    const images = [...document.querySelectorAll(`.${constelation}`)];
    images.map(image => image.classList.add("active"));
  }

  return (
    <nav className="menu menuHome">
      <ul>
        <li className="menuItem" id="missioLink" onClick={() => { handleClick("missio")} }>
          <CustomLink 
            href="/missio" 
            content="La Mission" 
            tag="NavLink"
            onClick={() => { handleClick("missio")} }
            onMouseEnter={() => {handleMouseEnter("missio")} }
            onMouseLeave={() => {handleMouseLeave("missio")} }
          />
        </li>
        <li className="menuItem"  id="zonesLink" onClick={() => { handleClick("zones")} }>
          <CustomLink 
            href="/zones" 
            content="Les Zones"
            tag="NavLink"
            onClick={() => handleClick("zones")}
            onMouseEnter={() => {handleMouseEnter("zones")} }
            onMouseLeave={() => {handleMouseLeave("zones")} }
          />
        </li>
        <li className="menuItem"  id="inventaireLink" onClick={() => { handleClick("inventaire")} }>
          <CustomLink 
            href="/inventaire" 
            content="L'Inventaire"
            tag="NavLink"
            onClick={() => handleClick("inventaire")}
            onMouseEnter={() => {handleMouseEnter("inventaire")} }
            onMouseLeave={() => {handleMouseLeave("inventaire")} }
          />
        </li>
        <li className="menuItem"  id="coulissesLink" onClick={() => { handleClick("coulisses")} }>
          <CustomLink 
            href="/coulisses" 
            content="Les Coulisses"
            tag="NavLink"
            onClick={() => handleClick("coulisses")}
            onMouseEnter={() => {handleMouseEnter("coulisses")} }
            onMouseLeave={() => {handleMouseLeave("coulisses")} }
          />
        </li>
      </ul>
    </nav>
  )
}

export default Menu

