/**
 * Created by Lincoln on 2016/8/13.
 */
import React from 'react';
import {render} from 'react-dom';
import Routers from './router.js';
import {browserHistory} from 'react-router';
import './style/app.css';
import './style/footer.css';
import './style/home.css';
import './style/menu.css';
import './style/bootstrap-theme.min.css';
import './style/bootstrap.min.css';
import  './style/Draft.css';
import './style/RichEditor.css';
import './style/react-select.css';

render(
    <Routers history = {browserHistory}/>
    , document.getElementById('root'));