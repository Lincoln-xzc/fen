/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link } from 'react-router';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class News extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'CompanyNews':[]
        };

    }
    componentDidMount(){
        let CompanyNews = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'cultural','tip': 'news'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            CompanyNews = result.data;
            this.setState({'CompanyNews': CompanyNews});
        });
    };
    render(){
        return(
            <div>
                <h4>行业动态</h4>
                <div className="rui-list">
                    <ul>
                        {this.state.CompanyNews.map((news,i)=>
                                <li key={i}>
                                    <Link to={"/cultural/dynamic/detail?id="+news.id}><span>{news.title}</span></Link>
                                    <span className="rui-right">{news.update_time}</span>
                                </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}