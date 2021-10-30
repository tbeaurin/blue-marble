import React from "react";
import CustomLink from "../Components/CustomLink";

const Missio = () => {

    React.useEffect(() => {
        document.querySelector(`#fontStatic`).classList.add("zoomed");
        document.querySelector(`#fontZones`).classList.add("zoomed");
        document.querySelector(`#fontMissio`).classList.add("zoomedZones");
        document.querySelector(`#fontInventaire`).classList.add("zoomedZones");
        document.querySelector(`#fontCoulisses`).classList.add("zoomedZones");

        document.querySelector(`#fontZones`).classList.remove("zoomedMissio");
        document.querySelector(`#fontZones`).classList.remove("zoomedInventaire");
        document.querySelector(`#fontZones`).classList.remove("zoomedCoulisses");

        const images = [...document.querySelectorAll(`.zones`)];
        images.map(image => image.classList.add("currentPage"));
        images.map(image => image.classList.remove("active"));
        images.map(image => image.classList.remove("focus"));
        // Don't display Wrapper on pages
        document.querySelector(`#missioFakeWrapper`).style.display = 'none'
        document.querySelector(`#zonesFakeWrapper`).style.display = 'none'
        document.querySelector(`#inventaireFakeWrapper`).style.display = 'none'
        document.querySelector(`#coulissesFakeWrapper`).style.display = 'none'
    }, [])

    return (
        <div id="zones">
            Zones
            <CustomLink 
                        href="/missio" 
                        content="La Mission" 
                        tag="NavLink" />
        </div>
    )
}

export default Missio