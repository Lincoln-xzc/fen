/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';

export default  class Concat extends React.Component{
    render(){
        return(
            <div>
                <h4>联系我们</h4>
                <h3 className="rui-block">全国加盟热线：0980-2344232</h3>
                <h3>地址：山东省菏泽市</h3>
            </div>
        )
    }
}