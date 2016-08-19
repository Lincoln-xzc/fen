/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link } from 'react-router';

export default  class Dynamic extends React.Component{
    render(){
        return(
            <div>
                <h4>行业动态</h4>
                <div className="rui-list">
                    <ul>
                        <li>
                            <Link to="/cultural/dynamic/detail"><span>吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span></Link>
                            <span className="rui-right">2015-11-05</span>
                        </li>
                        <li>
                            <Link to="/cultural/dynamic/detail"><span>鱼粉的精髓</span></Link>
                            <span className="rui-right">2015-11-05</span>
                        </li>
                        <li>
                            <Link to="/cultural/dynamic/detail"><span>鱼粉的精髓</span></Link>
                            <span className="rui-right">2015-11-05</span>
                        </li>
                        <li>
                            <Link to="/cultural/dynamic/detail"><span>鱼粉的精髓</span></Link>
                            <span className="rui-right">2015-11-05</span>
                        </li>
                        <li>
                            <Link to="/cultural/dynamic/detail"><span>鱼粉的精髓</span></Link>
                            <span className="rui-right">2015-11-05</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}