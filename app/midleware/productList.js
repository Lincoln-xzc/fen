/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';
import {Image} from 'react-bootstrap';
import {Link } from 'react-router';
import 'whatwg-fetch';
import SERVICE from '../api/config';

export default  class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'HomeCenter':[]
        };

    }
    componentDidMount(){
        let HomeCenter = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'home','tip': 'center'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            HomeCenter = result.data;
            this.setState({'HomeCenter': HomeCenter});
        });

    };
    render(){
        return(
            <div className="product_list">
                {this.state.HomeCenter.map((center, i) =>
                    <Link to='/product' key={i}>
                        <Image src={'http://localhost:3000/api/images?path='+center.url} style={{'width':this.props.width ,'height':this.props.height}} thumbnail/>
                    </Link>
                )}
            </div>
        )
    }
}