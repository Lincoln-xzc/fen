/**
 * Created by Lincoln on 2016/8/13.
 */
import React from 'react';
import {render} from 'react-dom';
import Routers from './router.js';
import {hashHistory} from 'react-router';
import './style/app.css';
import './style/bootstrap-theme.min.css';
import './style/bootstrap.min.css';

render(
    <Routers history = {hashHistory}/>
    , document.getElementById('root'));