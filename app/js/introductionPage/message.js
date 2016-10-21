/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class Message extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            'CompanyShort':[]
        };

    }
    componentDidMount(){
        let CompanyShort = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'introduction','tip': 'short'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            CompanyShort = result.data;
            this.setState({'CompanyShort': CompanyShort});
        });
    };
    render(){
        return (
            <div>
                <h4>企业简介</h4>
                <div className="rui-text">
                    {this.state.CompanyShort.map((short, i) =>
                        <div key={i}>
                            <p className="rui-center">
                                <img src={'http://localhost:3000/api/Images?path='+short.url} style={{width:700+'px',height:'auto'}}/>
                            </p>
                            <div dangerouslySetInnerHTML={{__html: short.content}}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}