import React from "react";

import black from '../asset/img/black.png'
import stars from '../asset/img/stars.png'
import starsMissio from '../asset/img/starsMissio.png'
import starsZone from '../asset/img/starsZone.png'
import starsInventory from '../asset/img/starsInventory.png'
import starsBackstage from '../asset/img/starsBackstage.png'
import constelationMissio from '../asset/img/constelationMissio.png'
import dessinMissio from '../asset/img/dessinMissio.png'
import constelationZones from '../asset/img/constelationZones.png'
import dessinZones from '../asset/img/dessinZones.png'
import constelationInventaire from '../asset/img/constelationInventaire.png'
import dessinInventaire from '../asset/img/dessinInventaire.png'
import constelationCoulisses from '../asset/img/constelationCoulisses.png'
import dessinCoulisses from '../asset/img/dessinCoulisses.png'
import logoANR from '../asset/img/logo-anr.png'
import logoEUL from '../asset/img/logo-eul.png'
import logoUNI from '../asset/img/logo-universite.png'

import Menu from "../Components/Menu";

const Home = () => {    
    return (
        <>
        <div className="font">
            <img className="background" id="black" src={black} alt="etoiles" />
            <img className="background background-shape" src={stars} alt="etoiles" />
            <img className="background background-shape" src={starsMissio} alt="etoilesMissio" />
            <img className="background background-shape" src={starsZone} alt="etoilesMissio" />
            <img className="background background-shape" src={starsInventory} alt="etoilesMissio" />
            <img className="background background-shape" src={starsBackstage} alt="etoilesMissio" />
            <img className="background background-hide missio constelation" src={constelationMissio} alt="constelationMissio" />
            <img className="background background-hide missio dessin" src={dessinMissio} alt="dessinMissio" />
            <img className="background background-hide zones constelation" src={constelationZones} alt="constelationZones" />
            <img className="background background-hide zones dessin" src={dessinZones} alt="dessinZones" />
            <img className="background background-hide inventaire constelation" src={constelationInventaire} alt="constelationInventaire" />
            <img className="background background-hide inventaire dessin" src={dessinInventaire} alt="dessinInventaire" />
            <img className="background background-hide coulisses constelation" src={constelationCoulisses} alt="constelationCoulisses" />
            <img className="background background-hide coulisses dessin" src={dessinCoulisses} alt="dessinCoulisses" />
        </div>
        <main>
            <section id="homeLeft">
                <h1><p><span className="small">Programme</span></p><span>Blue Marble</span></h1>
                <div class="logos"> 
                    <img className="logo" src={logoEUL} alt="Ecole Urbaine de Lyon" />           
                    <img className="logo" src={logoUNI} alt="Université de Lyon" />           
                    <img className="logo" src={logoANR} alt="ANR" />           
                </div>
                <div>
                    <p id="anrText">Ce travail a bénéficié de l’aide de l’Etat gérée par l’Agence Nationale de la Recherche au titre du programme d’Investissements d’avenir portant la référence ANR-17-CONV-0004</p>
                </div>
                <Menu />
            </section>
        </main>
        </>
    )
}

export default Home