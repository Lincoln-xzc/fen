/**
 * Created by Lincoln on 2016/8/13.
 */
import React from 'react';
import {render} from 'react-dom';
import Index from './js/index.js';
import Center from './js/center.js';
import Contact from './js/contact.js';
import Cultural from './js/cultural.js';
import Introduction from './js/introduction.js';
import Message from './js/message.js';
import Product from './js/product.js';
import Title from './midleware/title.js';
import {Router, Route, Link, hashHistory} from 'react-router';
class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                {this.props.children}
            </div>
        );
    }
}

render(
    <Router history = {hashHistory}>
        <Route path = '/' component= {App} />
        <Route path = '/index' component ={Index} />
        <Route path = '/introduction' component = {Introduction}/>
        <Route path = '/center' component = {Center}/>
        <Route path = '/cultural' component = {Cultural}/>
        <Route path = '/product' component = {Product}/>
        <Route path = '/message' component = {Message} />
        <Route path = '/contact' component = {Contact} />
    </Router>
    , document.getElementById('root'));