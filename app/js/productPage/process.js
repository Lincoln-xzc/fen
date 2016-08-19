/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';

export default  class Process extends React.Component{
    render(){
        return(
            <div>
                <h4>加工流程</h4>
                <div className="process rui-text">
                    <p className="rui-center">
                        <img src="/app/images/7.jpg" />
                    </p>
                </div>
            </div>
        )
    }
}