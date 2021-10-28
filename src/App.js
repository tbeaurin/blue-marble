import './App.scss';
import React from 'react'
import MainRouter from './Router/MainRouter'

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMove = e => {
    e.persist();
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".cursor--small");
    clientX = e.clientX;
    clientY = e.clientY;
    
    const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
  };
  requestAnimationFrame(render);
}

return (
    <div className="App" onMouseMove={e => {handleMove(e) }}>
      <div class="cursor cursor--small"></div>
      <MainRouter />
    </div>
  )
}

export default App
