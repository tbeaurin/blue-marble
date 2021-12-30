export const initializeCursor = () => {
  const render = () => {
    document.querySelector('.cursor--small').classList.remove('large');
    document.querySelector('.cursor--ext').classList.remove('large');
  };
  requestAnimationFrame(render);
};

export const openCursor = () => {
  const render = () => {
    document.querySelector('.cursor--small').classList.add('large');
    document.querySelector('.cursor--ext').classList.add('large');
  };
  requestAnimationFrame(render);
};
