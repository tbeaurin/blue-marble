/* eslint-disable no-shadow */
import React from 'react';

import { useDebouncedCallback } from 'use-debounce';
import { Trans, useTranslation } from 'react-i18next';

import CustomLink from './CustomLink';
import { initializeCursor, openCursor } from '../Functions/functions';

import previousArrow from '../assets/img/mobile/previous-arrow.png';
import nextArrow from '../assets/img/mobile/next-arrow.png';

const PopupCarousel = ({
  content = [], handleOpenModal, title, subtitle1, subtitle2, position, parent, isInventary,
}) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [xDown, setXDown] = React.useState(null);
  const [yDown, setYDown] = React.useState(null);

  const isMobile = width <= 768;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });

  const { t } = useTranslation();
  const [step, setStep] = React.useState(0);
  const [prevStep2, setPrevStep2] = React.useState(content.length - 2);
  const [nextStep2, setNextStep2] = React.useState(2);

  const initialStep = 0;
  const initialPrevStep = content.length - 1;
  const initialPrevStep2 = content.length - 2;
  const initialNextStep = 1;
  const initialNextStep2 = 2;

  React.useEffect(() => {
    if (step + 2 <= content.length - 1) {
      setNextStep2(step + 2);
    } else if (step + 2 <= content.length) {
      setNextStep2(0);
    } else {
      setNextStep2(1);
    }

    if (step - 2 >= 0) {
      setPrevStep2(step - 2);
    } else if (step - 2 >= -1) {
      setPrevStep2(content.length - 1);
    } else {
      setPrevStep2(content.length - 2);
    }
  }, [step, content.length]);

  const handleMouseEnter = (e) => {
    e.persist();
    openCursor();
  };

  const handleMouseLeave = (e) => {
    e.persist();
    initializeCursor();
  };

  const handleTouchStart = React.useCallback((e) => {
    const firstTouch = e.touches[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  }, []);

  const handlePrev = React.useCallback(() => {
    setStep((step) => (step - 1 >= 0 ? step - 1 : content.length - 1));
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
    const tempNewState = (prevStep2 - 1 >= 0 ? prevStep2 - 1 : content.length - 1);

    newNPrevious.src = content[tempNewState].image;
    newNPrevious.classList.remove('previous');
    newNPrevious.classList.add('previous-hide');

    // newNext.classList.add('next');
    newDiv.appendChild(newNPrevious);
    const element = document.getElementById('carousel');
    element.appendChild(newDiv);
  }, [content, prevStep2]);

  const handleNext = React.useCallback(() => {
    setStep((step) => (step + 1 <= content.length - 1 ? step + 1 : 0));

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
    const tempNewState = (nextStep2 + 1 <= content.length - 1 ? nextStep2 + 1 : 0);

    newNext.src = content[tempNewState].image;
    newNext.classList.remove('next');
    newNext.classList.add('next-hide');

    newDiv.appendChild(newNext);
    const element = document.getElementById('carousel');
    element.appendChild(newDiv);
  }, [content, nextStep2]);

  const handleTouchMove = React.useCallback((e) => {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = e.touches[0].clientX;
    const yUp = e.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setXDown(null);
    setYDown(null);
  }, [handleNext, handlePrev, xDown, yDown]);

  const scrollCarousel = useDebouncedCallback((direction) => {
    if (direction === 'up') {
      handleNext();
    }
    if (direction === 'down') {
      handlePrev();
    }
  }, [150]);

  const scrollCarouselFast = useDebouncedCallback((direction) => {
    if (direction === 'up') {
      handleNext();
    }
    if (direction === 'down') {
      handlePrev();
    }
  }, [25]);

  const handleWheel = React.useCallback((e) => {
    if (e.deltaY < 0) {
      scrollCarousel('down');
    } else if (e.deltaY > 0) {
      scrollCarousel('up');
    }
  }, [scrollCarousel]);

  const isEven = (n) => n % 2 === 0;

  return (
    <>
      {isMobile && (
        <CustomLink
          content={<Trans i18nKey="Popup.close" />}
          className="close"
          onClick={() => { handleOpenModal(); }}
        />
      )}
      <div id="carousel" className="page-content b-transparent h-100vh d-flex" onWheel={handleWheel}>
        <div className="wrappers">
          {!isMobile ? (
            <>
              <div
                className="previous-wrapper"
                onClick={() => { scrollCarouselFast('down'); }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <div
                className="next-wrapper"
                onClick={() => { scrollCarouselFast('up'); }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </>
          ) : (
            <div
              className="current-wrapper"
              onTouchMove={(e) => { handleTouchMove(e); }}
              onTouchStart={(e) => { handleTouchStart(e); }}
            />
          )}
        </div>
        <div>
          <img
            src={content[initialPrevStep2].image}
            className={`previous-hide ${parent && parent}`}
            alt=""
          />
        </div>
        <div>
          <img
            src={content[initialPrevStep].image}
            className={`previous ${parent && parent}`}
            alt=""
          />
        </div>
        <div>
          <img
            src={content[initialStep].image}
            className={`current ${parent && parent}`}
            alt=""
          />
        </div>
        <div>
          <img
            src={content[initialNextStep].image}
            className={`next ${parent && parent}`}
            alt=""
          />
        </div>
        <div>
          <img
            src={content[initialNextStep2].image}
            className={`next-hide ${parent && parent}`}
            alt=""
          />
        </div>
      </div>
      {isMobile && (
        <div className="wrappers-mobile">
          <div
            className="previous-wrapper-mobile"
            onClick={() => { scrollCarouselFast('down'); }}
          >
            <img id="previous-arrow" src={previousArrow} alt="previous" />
          </div>
          <div
            className="next-wrapper-mobile"
            onClick={() => { scrollCarouselFast('up'); }}
          >
            <img id="next-arrow" src={nextArrow} alt="next" />
          </div>
        </div>
      )}
      <div id="popupMain">
        <div className="d-flex flex-row h-100">
          {!isMobile ? (
            <div className={`popup-title ${!isEven(position) && 'odd'}`}>
              {isEven(position) ? (
                <>
                  <div className={`popup-subtitle ${isInventary && 'isInventary'}`}>
                    <span className="subtitle">{subtitle1}</span>
                    <span className="title">{subtitle2}</span>
                  </div>
                  <h2>{title}</h2>
                </>
              ) : (
                <div className="popup-description">
                  {content[step].description && t(content[step].description, '').length > 0
                  && <p className="ta-justify"><Trans i18nKey={content[step].description} /></p>}
                  {content[step].link && t(content[step].link, '').length > 0 ? (
                    <CustomLink
                      href={t(content[step].link)}
                      tag="Link"
                      target="_blank"
                      className="primary ta-justify"
                      content={t(content[step].important)}
                    />
                  ) : (
                    <>
                      {content[step].important && t(content[step].important, '').length > 0 && (
                        <span className="important ta-justify">
                          <Trans i18nKey={content[step].important} />
                        </span>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="popup-description">
              {content[step].description && t(content[step].description, '').length > 0
              && <p className="ta-justify"><Trans i18nKey={content[step].description} /></p>}
              {content[step].link && t(content[step].link, '').length > 0 ? (
                <CustomLink
                  href={t(content[step].link)}
                  tag="Link"
                  target="_blank"
                  className="primary ta-justify"
                  content={t(content[step].important)}
                />
              ) : (
                <>
                  {content[step].important && t(content[step].important, '').length > 0 && (
                    <span className="important ta-justify">
                      <Trans i18nKey={content[step].important} />
                    </span>
                  )}
                </>
              )}
            </div>
          )}
          <div className={`popup-title w-50 ${!isEven(position) && 'odd'} ${!isMobile && 'w-50'}`}>
            {!isMobile && (
              <CustomLink
                content={<Trans i18nKey="Popup.close" />}
                className="close"
                onClick={() => { handleOpenModal(); }}
              />
            )}
            {isEven(position) && !isMobile ? (
              <div className="popup-description">
                {content[step].description && t(content[step].description, '').length > 0
                && <p className="ta-justify"><Trans i18nKey={content[step].description} /></p>}
                {content[step].link && t(content[step].link, '').length > 0 ? (
                  <>
                    <CustomLink
                      href={t(content[step].link)}
                      tag="Link"
                      target="_blank"
                      className="primary ta-justify"
                      content={t(content[step].important)}
                    />
                  </>
                ) : (
                  <>
                    {content[step].important && t(content[step].important, '').length > 0 && (
                      <span className="important ta-justify"><Trans i18nKey={content[step].important} /></span>
                    )}
                  </>
                )}
              </div>
            ) : (
              <>
                <div className="popup-subtitle">
                  <span className="subtitle">{subtitle1}</span>
                  <span className="title">{subtitle2}</span>
                </div>
                <h2>{title}</h2>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCarousel;
