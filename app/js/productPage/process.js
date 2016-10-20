/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class Process extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'ProductProcess':[]
        };

    }
    componentDidMount(){
        let ProductProcess = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'product','tip': 'process'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            ProductProcess = result.data;
            this.setState({'ProductProcess': ProductProcess});
        });
    };
    render(){
        return(
            <div>
                <h4>加工流程</h4>
                <div className="process rui-text">
                    {this.state.ProductProcess.map((process, i) =>
                        <p className="rui-center">
                            <img src={'http://localhost:3000/api/Images?path='+process.url} />
                        </p>
                    )}

                </div>
            </div>
        )
    }
}