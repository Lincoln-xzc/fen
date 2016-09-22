/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import '../style/menu.css';
import MenuItem from './menuItem.js';

export default class ChildMenu extends React.Component{
    /*constructor(props){
        super(props);
        this.state ={
            data :[]
        }
    }*/

    //会在组件render之前执行，并且永远都只执行一次。
    /*componentWillMount(){

    }*/
    //这个方法会在组件加载完毕之后立即执行。在这个时候之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
    /*如果你想和其他JavaScript框架一起使用，可以在这个方法中执行setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。*/
   /* componentDidMount(){
        console.log('2');
    }*/

    /*组件更新: */
    /*componentWillUpdate(m,n){

    }*/
    /*在组件完成更新后立即执行。在初始化时不会被执行。一般会在组件完成更新后被使用。*/
    /*componentDidUpdate(m,n){

    }*/

    /*在组件从DOM unmount后立即执行，主要用来执行一些必要的清理任务*/
    /*componentWillUnmount(){

    }*/

    render(){
        var rows = [];
        this.props.menuTree.menu.forEach(function(item){
            rows.push( <MenuItem key = {item.id} url={item.url} name={item.name} />)
        });
        return(
            <div className = 'childMenu'>
                <img src={require('../images/title.png')} className="left-title"/>
                <h1 className='rui-center'>{this.props.menuTree.title}</h1>
                <div className="leftMenu">
                    {rows}
                </div>
            </div>
        )
    }
}