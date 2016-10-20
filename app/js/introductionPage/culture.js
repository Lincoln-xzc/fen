/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import SERVICE from '../../api/config';

export default  class Culture extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            'CompanyCultural':[]
        };

    }
    componentDidMount(){
        let CompanyCultural = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'introduction','tip': 'culture'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            CompanyCultural = result.data;
            this.setState({'CompanyCultural': CompanyCultural});
        });
    };
    render(){
        return (
            <div className="culture">
                <h4>企业文化</h4>
                <div className="rui-text">
                    <h1 className="rui-center">Corporate Culture</h1>
                    <h2 className="rui-center">企业文化</h2>
                    {this.state.CompanyCultural.map((cultural,i)=>
                        <div key={i}>
                            <div className="rui-center" dangerouslySetInnerHTML={{__html: cultural.content}}/>
                            <p>
                                <br/>
                            </p>
                            <p className="rui-center">
                                <img src={'http://localhost:3000/api/Images?path='+cultural.url}/>
                            </p>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}