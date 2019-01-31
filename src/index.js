import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/index';
import AppRouter from './components/router'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<div className="container"><AppRouter><Index/></AppRouter></div>, document.getElementById('root'));

serviceWorker.unregister();
