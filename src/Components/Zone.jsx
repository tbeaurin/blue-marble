import React from 'react';

import { Trans } from 'react-i18next';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import PopupCarousel from './PopupCarousel';
import CustomLink from './CustomLink';

const Zone = ({
  carouselContent,
  id,
  parent,
  direction,
  handleOpenModal,
  openModal,
  position,
  doubleLineTitle = false,
  isInventary = false,
}) => (
  <div className="page-content zone">
    <div>
      <span className="zone-subtitle" id={`${id}-subtitle`}><Trans i18nKey={`${parent}.${id}.subtitle`} /></span>
      <h2 className="zone-h2">
        {doubleLineTitle ? (
          <>
            <span><Trans i18nKey={`${parent}.${id}.title.1`} /></span>
            <span><Trans i18nKey={`${parent}.${id}.title.2`} /></span>
          </>
        ) : (
          <span><Trans i18nKey={`${parent}.${id}.title`} /></span>
        )}
      </h2>
      <CustomLink
        content={(
          <span className="button-open" id={`${id}-open`}>
            <Trans i18nKey="Popup.open" />
          </span>
        )}
        onClick={() => { handleOpenModal(position, direction); }}
      />
      <Popup modal open={openModal[position]} className={`popup-${direction}`}>
        <PopupCarousel
          parent={parent}
          content={carouselContent}
          title={(
            <>
              {doubleLineTitle ? (
                <>
                  <span><Trans i18nKey={`${parent}.${id}.title.1`} /></span>
                  <span><Trans i18nKey={`${parent}.${id}.title.2`} /></span>
                </>
              ) : (
                <span><Trans i18nKey={`${parent}.${id}.title`} /></span>
              )}
            </>
          )}
          subtitle1={<Trans i18nKey={`${parent}.${id}.subtitle`} />}
          subtitle2={<Trans i18nKey={`${parent}.${id}.title`} />}
          position={position}
          handleOpenModal={() => { handleOpenModal(position, direction); }}
          isInventary={isInventary}
        />
      </Popup>
    </div>
  </div>
);

export default Zone;
