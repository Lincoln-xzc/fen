/**
 * Created by Lincoln on 2016/8/13.
 */
import React from 'react';
import {render} from 'react-dom';
import Routers from './router.js';
import {hashHistory} from 'react-router';
import './style/app.css';

render(
    <Routers history = {hashHistory}/>
    , document.getElementById('root'));