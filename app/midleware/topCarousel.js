/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';

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
        this.setState({c:0});
        this.timer = setInterval(function(){
            this.state.c +=1;
            this.setState({time:this.state.c});
            console.log(this.state.c);

        }.bind(this),40)
    };

    componentWillUpdate(m,n){
        if(n.time ==760){
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
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="news"> <img src="/app/images/6.jpg" className="fl newspic" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/> <span >吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span>
                                <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}