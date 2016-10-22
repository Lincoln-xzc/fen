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
import IMessage from './js/introductionPage/message.js';
import ICulture from './js/introductionPage/culture.js';
import IDemeanor from './js/introductionPage/demeanor.js';
import IHonor from './js/introductionPage/honor.js';
import Show from './js/centerPage/show.js';
import Concat from './js/contactPage/cancat.js';
import Recruitment from './js/contactPage/recruitment.js';
import Dynamic from './js/culturalPage/dynamic.js';
import News from './js/culturalPage/news.js';
import Leave from './js/messagePage/leaveMessage.js';
import Process from './js/productPage/process.js';
import Detail from './js/culturalPage/detail.js';
import EndIndex from './js/ended/index.js';
import Login from './js/ended/login.js';
import Register from './js/ended/register.js';
import EHome from './js/ended/home.js';
import Images  from './js/ended/home/images.js';
import Upload from './js/ended/home/upload.js';
import Fonts from './js/ended/home/fonts.js';
import Describe from './js/ended/home/describe.js';

export default class Routers extends React.Component{
    render(){
        return (
            <Router history = {this.props.history}>
                <Route path = '/' component= {Index}>
                    <IndexRoute component={Home} />
                    <Route path = '/home' component = {Home} />
                    <Route path = '/introduction' component = {Introduction}>
                        <IndexRoute component={IMessage}/>
                        <Route path ='/introduction/message' component={IMessage}/>
                        <Route path ='/introduction/culture' component={ICulture}/>
                        <Route path ='/introduction/demeanor' component={IDemeanor}/>
                        <Route path ='/introduction/honor' component={IHonor}/>
                    </Route>
                    <Route path = '/center' component = {Center}>
                        <IndexRoute component={Show}/>
                        <Route path='/center/show' component={Show}/>
                    </Route>
                    <Route path = '/cultural' component = {Cultural}>
                        <IndexRoute component={News}/>
                        <Route path='/cultural/news'component={News}/>
                        <Route path='/cultural/dynamic' component={Dynamic}/>
                        <Route path='/cultural/news/detail/:id' component={Detail}/>
                        <Route path='/cultural/dynamic/detail/:id' component={Detail} />
                    </Route>
                    <Route path = '/product' component = {Product}>
                        <IndexRoute component={Process}/>
                        <Route path='/product/process' component={Process}/>
                    </Route>
                    <Route path = '/message' component = {Message}>
                        <IndexRoute component={Leave}/>
                        <Route path ='/message/leave' component={Leave}/>
                    </Route>
                    <Route path = '/contact' component = {Contact}>
                        <IndexRoute component={Concat}/>
                        <Route path = '/contact/concat' component={Concat}/>
                    </Route>
                </Route>
                <Route path="/end" component={EndIndex}>
                    <IndexRoute component={Login}/>
                    <Route path='/end/login' component={Login}/>
                    <Route path="/end/register" component={Register}/>
                    <Route path="/end/home" component={EHome}>
                        <IndexRoute component={Images}/>
                        <Route path='/end/home/images' component={Images}/>
                        <Route path='/end/home/upload' component={Upload}/>
                        <Route path='/end/home/fonts' component={Fonts}/>
                        <Route path='/end/home/describe' component={Describe}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}