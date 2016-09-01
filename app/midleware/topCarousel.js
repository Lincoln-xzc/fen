/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import '../style/app.css';

export default  class TopCarousel extends React.Component {

    //初始化state
    constructor(props){
        super(props);
        this.state ={
            autoPlay : true,
            time: 0,
            c: 0
        }
    }
    //初次渲染后React执行此方法
    componentDidMount(){
        this.timer = setInterval(function(){
            this.state.c +=1;
            this.setState({time:this.state.c});
        }.bind(this),40)
    };

    componentWillUpdate(m,n){
        if(n.time ==(this.props.height)){
            this.setState({time:0,c:0});
        }
    };
    //即将从DOM树移除时执行此方法
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render() {
        return (
            <div className="dyright fr rel">
                <div  className="abs" style={{'top':-this.state.time +'px'}}>
                    <ul className="list-unstyle">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        )
    }
}