/**
 * Created by Htmler on 2016/8/18.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import '../style/menu.css';

export default  class MenuItem extends React.Component{
    render(){
        return(
            <div>
                <Link to={this.props.url}>
                    <h3>{this.props.name}</h3>
                </Link>
                <div className ="darkline"></div>
            </div>
        )
    }
}