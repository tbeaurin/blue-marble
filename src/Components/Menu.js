import React from "react"
import CustomLink from "./CustomLink"

const Menu = () => {
    const handleMouseEnter = constelation => {
        const images = [...document.querySelectorAll(`.${constelation}`)];
        images.map(image => image.classList.remove("lose-focus"));
        images.map(image => image.classList.add("focus"));
    }

    const handleMouseLeave = constelation => {
        const images = [...document.querySelectorAll(`.${constelation}`)];
        images.map(image => image.classList.add("lose-focus"));
        images.map(image => image.classList.remove("focus"));
    }

    return (
        <nav className="menu menuHome">
            <ul>
                <li class="menuItem">
                    <CustomLink 
                        className="menu" 
                        href="/missio" 
                        content="La Mission" 
                        onMouseEnter={() => {handleMouseEnter("missio")} }
                        onMouseLeave={() => {handleMouseLeave("missio")} }
                    />
                </li>
                <li class="menuItem">
                    <CustomLink 
                        className="menu" 
                        href="/zones" 
                        content="Les Zones"
                        onMouseEnter={() => {handleMouseEnter("zones")} }
                        onMouseLeave={() => {handleMouseLeave("zones")} }
                    />
                </li>
                <li class="menuItem">
                    <CustomLink 
                        className="menu" 
                        href="/inventaire" 
                        content="L'Inventaire"
                        onMouseEnter={() => {handleMouseEnter("inventaire")} }
                        onMouseLeave={() => {handleMouseLeave("inventaire")} }
                    />
                </li>
                <li class="menuItem">
                    <CustomLink 
                        className="menu" 
                        href="/coulisses" 
                        content="Les Coulisses"
                        onMouseEnter={() => {handleMouseEnter("coulisses")} }
                        onMouseLeave={() => {handleMouseLeave("coulisses")} }
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Menu

