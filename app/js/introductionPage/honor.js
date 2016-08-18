/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';

export default  class Honor extends React.Component {
    render(){
        return (
            <div>
                <h4>企业荣誉</h4>
                <div className="rui-text">
                    <div className="rui-center">
                        <img src="/app/images/8.jpg" className="honor"/>
                    </div>
                </div>
            </div>
        )
    }
}