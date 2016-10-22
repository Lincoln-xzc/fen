/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link } from 'react-router';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class Dynamic extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'CompanyDynamic':[]
        };

    }
    componentDidMount(){
        let CompanyDynamic = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'cultural','tip': 'dynamic'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            CompanyDynamic = result.data;
            this.setState({'CompanyDynamic': CompanyDynamic});
            console.log(CompanyDynamic);
        });
    };
    render(){
        return(
            <div>
                <h4>行业动态</h4>
                <div className="rui-list">
                    <ul>
                        {this.state.CompanyDynamic.map((dynamic,i)=>
                            <li key={i}>
                                <Link to={"/cultural/dynamic/detail/"+dynamic.id}><span>{dynamic.title}</span></Link>
                                <span className="rui-right">{dynamic.update_time}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}