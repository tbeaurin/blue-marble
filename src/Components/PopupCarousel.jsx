import React from 'react';

import CustomLink from './CustomLink';

// @todo  : finir le handleNext et handlePrevious
// @todo  : créer l'animation
// @todo  : gérer le défilement au scroll
// @todo  : (mettre des flèches ??)
// @todo  : faire le responsive !

const PopupCarousel = ({ images = [] }) => {
  const [step, setStep] = React.useState(0);
  const [prevStep2, setPrevStep2] = React.useState(images.length - 2);
  const [nextStep2, setNextStep2] = React.useState(2);

  const initialStep = 0;
  const initialPrevStep = images.length - 1;
  const initialPrevStep2 = images.length - 2;
  const initialNextStep = 1;
  const initialNextStep2 = 2;

  React.useEffect(() => {
    if (step + 2 <= images.length - 1) {
      setNextStep2(step + 2);
    } else if (step + 2 <= images.length) {
      setNextStep2(0);
    } else {
      setNextStep2(1);
    }

    if (step - 2 >= 0) {
      setPrevStep2(step - 2);
    } else if (step - 2 >= -1) {
      setPrevStep2(images.length - 1);
    } else {
      setPrevStep2(images.length - 2);
    }
  }, [step, images.length]);

  const handleMouseEnter = (e) => {
    e.persist();
    const render = () => {
      document.querySelector('.cursor--small').classList.add('large');
      document.querySelector('.cursor--ext').classList.add('large');
    };
    requestAnimationFrame(render);
  };

  const handleMouseLeave = (e) => {
    e.persist();
    const render = () => {
      document.querySelector('.cursor--small').classList.remove('large');
      document.querySelector('.cursor--ext').classList.remove('large');
    };
    requestAnimationFrame(render);
  };

  const handlePrev = React.useCallback((e) => {
    setStep((step) => (step - 1 >= 0 ? step - 1 : images.length - 1));
    // delete next image
    const nextHide = Array.from(document.getElementsByClassName('next-hide'))[0];
    nextHide.parentNode.remove();
    nextHide.remove();

    // set next as current
    const next = Array.from(document.getElementsByClassName('next'))[0];
    next.classList.remove('next');
    next.classList.add('next-hide');

    // set current as next
    const current = Array.from(document.getElementsByClassName('current'))[0];
    current.classList.remove('current');
    current.classList.add('next');

    const previous = Array.from(document.getElementsByClassName('previous'))[0];
    const newNPrevious = previous.cloneNode(true);
    previous.classList.remove('previous');
    previous.classList.add('current');

    // set next-hide as next
    const previousHide = Array.from(document.getElementsByClassName('previous-hide'))[0];
    previousHide.classList.remove('previous-hide');
    previousHide.classList.add('previous');

    // create next image
    const newDiv = document.createElement('div');
    const tempNewState = (prevStep2 - 1 >= 0 ? prevStep2 - 1 : images.length - 1);

    newNPrevious.src = images[tempNewState];
    newNPrevious.classList.remove('previous');
    newNPrevious.classList.add('previous-hide');

    // newNext.classList.add('next');
    newDiv.appendChild(newNPrevious);
    const element = document.getElementById('carousel');
    element.appendChild(newDiv);
  }, [images, prevStep2]);

  const handleNext = React.useCallback((e) => {
    setStep((step) => (step + 1 <= images.length - 1 ? step + 1 : 0));

    // delete previous image
    const previousHide = Array.from(document.getElementsByClassName('previous-hide'))[0];
    previousHide.parentNode.remove();
    previousHide.remove();

    const previous = Array.from(document.getElementsByClassName('previous'))[0];
    previous.classList.remove('previous');
    previous.classList.add('previous-hide');
    // set current as previous
    const current = Array.from(document.getElementsByClassName('current'))[0];
    current.classList.remove('current');
    current.classList.add('previous');
    // set next as current
    const next = Array.from(document.getElementsByClassName('next'))[0];
    const newNext = next.cloneNode(true);
    next.classList.remove('next');
    next.classList.add('current');

    // set next-hide as next
    const nextHide = Array.from(document.getElementsByClassName('next-hide'))[0];
    nextHide.classList.remove('next-hide');
    nextHide.classList.add('next');
    // create next image
    const newDiv = document.createElement('div');
    const tempNewState = (nextStep2 + 1 <= images.length - 1 ? nextStep2 + 1 : 0);

    newNext.src = images[tempNewState];
    newNext.classList.remove('next');
    newNext.classList.add('next-hide');

    // newNext.classList.add('next');
    newDiv.appendChild(newNext);
    const element = document.getElementById('carousel');
    element.appendChild(newDiv);
  }, [images, nextStep2]);

  const handleWheel = React.useCallback((e) => {
    if (e.deltaY < 0) {
      console.log('scrollDown');
    } else {
      console.log('scrollUp');
    }
  }, []);

  return (
    <div id="carousel" className="page-content b-white h-100vh d-flex" onWheel={handleWheel}>
      <div className="wrappers">
        <div
          className="previous-wrapper"
          onClick={(e) => {
            handlePrev(e);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="next-wrapper"
          onClick={(e) => {
            handleNext(e);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div>
        <img
          src={images[initialPrevStep2]}
          className="previous-hide"
        />
      </div>
      <div>

        <img
          src={images[initialPrevStep]}
          className="previous"
        />
      </div>
      <div>
        <img
          src={images[initialStep]}
          className="current"
        />
      </div>
      <div>
        <img
          src={images[initialNextStep]}
          className="next"
        />
      </div>
      <div>
        <img
          src={images[initialNextStep2]}
          className="next-hide"
        />
      </div>
    </div>
  );
};

export default PopupCarousel;
