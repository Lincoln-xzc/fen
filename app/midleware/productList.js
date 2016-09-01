/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';
import {Image} from 'react-bootstrap';
import {Link } from 'react-router';

export default  class ProductList extends React.Component{
    render(){
        return(
            <div className="product_list">
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
                <Link to='/product'>
                    <Image src="../images/6.jpg" style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                </Link>
            </div>
        )
    }
}