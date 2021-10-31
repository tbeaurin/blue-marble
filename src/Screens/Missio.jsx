import React from 'react';

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
    <div id="missio">
      <h2>MISSIO</h2>
      <p className="content" style={{ padding: 200 }} onScroll={(e) => handleScroll(e)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lorem vel neque volutpa
      </p>
    </div>
  );
};

export default Missio;
