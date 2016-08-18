/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';

export default  class IntroductionMessage extends React.Component {
    render(){
        return (
            <div>
                <h4>员工风采</h4>
                <div className="rui-text">
                    <h5 className="rui-center">资料更新中，敬请期待</h5>
                </div>
            </div>
        )
    }
}