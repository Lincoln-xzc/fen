/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link } from 'react-router';
export default  class Title extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li><Link to='/index'>首页</Link></li>
                    <li><Link to='/introduction'>工厂简介</Link></li>
                    <li><Link to='/center'>产品中心</Link></li>
                    <li><Link to='/cultural'>文化理念</Link></li>
                    <li><Link to='/product'>生产流程</Link></li>
                    <li><Link to='/message'>客户留言</Link></li>
                    <li><Link to='/contact'>联系我们</Link></li>
                </ul>
            </div>
        )
    }
}