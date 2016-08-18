/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';

export default  class Culture extends React.Component {
    render(){
        return (
            <div className="culture">
                <h4>企业文化</h4>
                <div className="rui-text">
                    <h1 className="rui-center">Corporate Culture</h1>
                    <h2 className="rui-center">企业文化</h2>
                    <p className="rui-center">
                        我们拥有十余年连锁经营的成功经验，在业界具有极高的平高知名度及美誉度。
                    </p>
                    <p>
                        <br/>
                    </p>
                    <p className="rui-center">
                        <img src='/app/images/10.jpg'/>
                    </p>
                </div>
            </div>
        )
    }
}