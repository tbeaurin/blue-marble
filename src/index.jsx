import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './App';

import './index.scss';
import './i18n';

ReactGA.initialize('G-1PKMKCKJJ5');

const MainApp = () => <App />;

export default ReactDOM.render(<MainApp />, document.getElementById('root'));
