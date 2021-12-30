import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';
import './i18n';

const MainApp = () => <App />;

export default ReactDOM.render(<MainApp />, document.getElementById('root'));
