/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import Index from './js/index.js';
import Center from './js/center.js';
import Contact from './js/contact.js';
import Cultural from './js/cultural.js';
import Introduction from './js/introduction.js';
import Message from './js/message.js';
import Product from './js/product.js';
import Home from './js/home.js';
export default class Routers extends React.Component{
    render(){
        return (
            <Router history = {this.props.history}>
                <Route path = '/' component= {Index}>
                    <IndexRoute component={Home} />
                    <Route path = '/home' component = {Home} />
                    <Route path = '/introduction' component = {Introduction}/>
                    <Route path = '/center' component = {Center}/>
                    <Route path = '/cultural' component = {Cultural}/>
                    <Route path = '/product' component = {Product}/>
                    <Route path = '/message' component = {Message} />
                    <Route path = '/contact' component = {Contact} />
                </Route>
            </Router>
        )
    }
}