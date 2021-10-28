import React from "react"

const CustomLink = ({href, content, onMouseEnter, onMouseLeave}) => {

    const handleMouseEnter = e => {
        console.log(e)
        e.persist()
        const render = () => {
          const innerCursor = document.querySelector(".cursor--small");
          innerCursor.style.width = `58px`;
          innerCursor.style.height = `58px`;
        };
        requestAnimationFrame(render);
        onMouseEnter && onMouseEnter();
      };

    const handleMouseLeave = e => {
        e.persist()
        const render = () => {
          const innerCursor = document.querySelector(".cursor--small");
          innerCursor.style.width = `29px`;
          innerCursor.style.height = `29px`;
          };
          requestAnimationFrame(render);
          onMouseLeave && onMouseLeave();
      };

    return (
        <a href={href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{content}</a>
    )
}

export default CustomLink

