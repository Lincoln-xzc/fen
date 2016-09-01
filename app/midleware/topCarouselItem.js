/**
 * Created by Htmler on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import '../style/app.css';

export default class TopCarouselItem extends React.Component{
    render(){
        return(
            <li>
                <div className="news">
                    {this.props.children}
                </div>
            </li>
        )
    }
}