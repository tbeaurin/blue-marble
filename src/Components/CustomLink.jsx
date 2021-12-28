import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({
  href, content, tag, onMouseEnter, onMouseLeave, className, onClick, target,
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

  switch (tag) {
  case 'NavLink': return (
    <NavLink
      to={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </NavLink>
  );
  case 'Link': return (
    <a
      className={className}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      target={target}
    >
      {content}
    </a>
  );
  default: return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {content}
    </div>
  );
  }
};

export default CustomLink;
