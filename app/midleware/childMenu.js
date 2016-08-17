/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import '../style/menu.css';

export default class ChildMenu extends React.Component{
    render(){
        return(
            <div className = 'childMenu'>
                <img src="/app/images/title.png" className="left-title"/>
                <h1 className='rui-center'>{this.props.name}</h1>
                <div className="leftMenu">
                    <Link to='/introduction/message'>
                       <h3>企业简介</h3>
                    </Link>
                    <div className ="darkline"></div>
                    <Link to='/introduction/honor'>
                        <h3>企业荣誉</h3>
                    </Link>
                    <div className ="darkline"></div>
                    <Link to='/introduction/culture'>
                        <h3>企业文化</h3>
                    </Link>
                    <div className ="darkline"></div>
                    <Link to='/introduction/demeanor'>
                        <h3>员工风采</h3>
                    </Link>
                    <div className ="darkline"></div>
                </div>
            </div>
        )
    }
}