/**
 * Created by Htmler on 2016/8/19.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link } from 'react-router';
import {Grid} from 'react-bootstrap';
export default class Index extends React.Component{
    render(){
        return(
            <div className='ended'>
                <div className="menuNav">
                    <div className = 'title'>
                        <Link to = '/' className = 'photo'>
                            <img src='/app/images/logo.jpg'/>
                        </Link>
                    </div>
                    <div className="rui-right">
                        <Link to='/home'>网站首页</Link>
                    </div>
                </div>
                <div className="roof"></div>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        )
    }
}