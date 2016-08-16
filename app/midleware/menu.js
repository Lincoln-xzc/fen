/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link } from 'react-router';
import  '../style/menu.css';
export default  class Menu extends React.Component{
    render(){
        return (
            <div className="menuNav">
                <div className ="login_href">
                    <Link to = '/login' className="login">登录</Link>
                    <Link to = '/register'>注册</Link>
                </div>
                <div className = 'title'>
                    <Link to = '/' className = 'photo'>
                        <img src='/app/images/index_03.png'/>
                    </Link>
                    <ul className = "rui-nav rui-bar">
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/introduction'>工厂简介</Link></li>
                        <li><Link to='/center'>产品中心</Link></li>
                        <li><Link to='/cultural'>文化理念</Link></li>
                        <li><Link to='/product'>生产流程</Link></li>
                        <li><Link to='/message'>客户留言</Link></li>
                        <li><Link to='/contact'>联系我们</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}