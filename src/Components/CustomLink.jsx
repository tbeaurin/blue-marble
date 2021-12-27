import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({
  href, content, tag, onMouseEnter, onMouseLeave, className,
}) => {
  const handleMouseEnter = (e) => {
    e.persist();
    const render = () => {
      document.querySelector('.cursor--small').classList.add('large');
      document.querySelector('.cursor--ext').classList.add('large');
    };
    requestAnimationFrame(render);
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = (e) => {
    e.persist();
    const render = () => {
      document.querySelector('.cursor--small').classList.remove('large');
      document.querySelector('.cursor--ext').classList.remove('large');
    };
    requestAnimationFrame(render);
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return tag === 'NavLink' ? (
    <NavLink
      to={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </NavLink>
  ) : (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
};

export default CustomLink;
