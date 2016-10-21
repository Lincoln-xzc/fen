/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class Honor extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            'CompanyHonor':[]
        };

    }
    componentDidMount(){
        let CompanyHonor = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'introduction','tip': 'honor'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            CompanyHonor = result.data;
            this.setState({'CompanyHonor': CompanyHonor});
        });
    };
    render(){
        return (
            <div>
                <h4>企业简介</h4>
                <div className="rui-text">
                    {this.state.CompanyHonor.map((honor, i) =>
                            <div key={i}>
                                <p className="rui-center">
                                    <img src={'http://localhost:3000/api/Images?path='+honor.url} style={{width:700+'px',height:'auto'}}/>
                                </p>
                                <div dangerouslySetInnerHTML={{__html: honor.content}}/>
                            </div>
                    )}
                </div>
            </div>
        )
    }
}