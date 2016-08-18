/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import ProductList from '../../midleware/productList.js';
import {Pagination} from 'react-bootstrap';

export default  class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activePage:1
        }
    }
    handleSelect(eventKey){
        this.setState({
            activePage:eventKey
        })
    }

    render(){
        return(
            <div>
                <h4>产品展示</h4>
                <div className="rui-center">
                    <ProductList width={200} height={258}/>
                    <Pagination
                        prev
                        next
                        ellipsis
                        boundaryLinks
                        items={20}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}/>
                </div>

            </div>
        )
    }
}