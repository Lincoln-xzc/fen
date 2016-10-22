/**
 * Created by Htmler on 2016/8/19.
 */
import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'NewsDetail':[]
        };

    }
    componentDidMount(){
        let NewsDetail = [];
        console.log(this.props.routeParams.id);
        let id = this.props.routeParams.id;
        fetch(SERVICE.DETAILS+id,{
            method: 'POST',
            headers: SERVICE.HEADERS,
        }).then((response) => {
            return response.json();
        }).then((result) => {
            NewsDetail = result.data;
            this.setState({'NewsDetail': NewsDetail});
        });
    };
    render(){
        return(
            <div className="detail">
                <h4>信息详情</h4>
                {this.state.NewsDetail.map((news,i)=>
                    <div className="row" key={i}>
                        <div className="rui-center">
                            <h3>{news.title}</h3>
                            <span className="rui-block">上传时间：{news.update_time}</span>
                        </div>
                        <div className="rui-content">
                            <p className="rui-center"><img src={'http://localhost:3000/api/images?path='+news.url} style={{width:400+'px'}}/></p>
                            <div dangerouslySetInnerHTML={{__html: news.content}}/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}