import React from 'react';
import ReactDOM from 'react-dom';
import {findDOMNode} from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/css/animate.min.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.css'
import './assets/css/bootstrap-reboot.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/icomoon.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/meanmenu.css'
import './assets/css/nice-select.css'
import './assets/css/normalize.css'
import './assets/css/responsive.css'
import './assets/css/slick.css'
import './assets/css/style.css'


ReactDOM.render(
 <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
