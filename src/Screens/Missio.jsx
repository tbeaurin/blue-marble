import React from 'react';
import { Trans } from 'react-i18next';

const Missio = () => {
  React.useEffect(() => {
    document.querySelector('#fontStatic').classList.add('zoomed');
    document.querySelector('#fontMissio').classList.add('zoomed');
    document.querySelector('#fontZones').classList.add('zoomedMissio');
    document.querySelector('#fontInventaire').classList.add('zoomedMissio');
    document.querySelector('#fontCoulisses').classList.add('zoomedMissio');

    document.querySelector('#fontMissio').classList.remove('zoomedZones');
    document.querySelector('#fontMissio').classList.remove('zoomedInventaire');
    document.querySelector('#fontMissio').classList.remove('zoomedCoulisses');

    const images = [...document.querySelectorAll('.missio')];
    images.map((image) => image.classList.add('currentPage'));
    images.map((image) => image.classList.remove('active'));
    images.map((image) => image.classList.remove('focus'));

    // Don't display Wrapper on pages
    document.querySelector('#missioFakeWrapper').style.display = 'none';
    document.querySelector('#zonesFakeWrapper').style.display = 'none';
    document.querySelector('#inventaireFakeWrapper').style.display = 'none';
    document.querySelector('#coulissesFakeWrapper').style.display = 'none';
  }, []);

  const handleScroll = (e) => {
    document.querySelector('#missioStars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 6}px`;
    document.querySelector('#missioDessin').style.top = `-${e.nativeEvent.srcElement.scrollTop / 6}px`;
    document.querySelector('#missioConstelation').style.top = `-${e.nativeEvent.srcElement.scrollTop / 6}px`;
    document.querySelector('#stars').style.top = `-${e.nativeEvent.srcElement.scrollTop / 18}px`;
  };

  return (
    <div className="main">
      <div id="missio">
        <div className="header">
          <h2>MISSIO</h2>
          <span className="constelation-name">Missio</span>
        </div>
        <div className="content" onScroll={(e) => handleScroll(e)}>
          <div className="page" id="missio1">
            <p className="citation">
              <Trans i18nKey="Missio.citation" />
            </p>
            <p className="citation-content">
              <span className="author"><Trans i18nKey="Missio.citation.author.1" /></span>
              <span className="explication"><Trans i18nKey="Missio.citation.author.2" /></span>
              <span className="source"><Trans i18nKey="Missio.citation.author.3" /></span>
            </p>
          </div>
          <div id="missio2" className="page">
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />
            <Trans i18nKey="Missio.citation" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Missio;
