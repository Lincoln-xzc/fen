/**
 * Created by Htmler on 2016/8/19.
 */
import React from 'react';
import {render} from 'react-dom';
import {Row,Col,Form,FormControl,FormGroup,ControlLabel,Image,Panel} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';
import 'whatwg-fetch';
import  SERVICE from '../../api/config';
export default class Login  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nameError:'',
            pwError: '',
            capError: '',
            name:'',
            password:'',
            capital: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePWChange = this.handlePWChange.bind(this);
        this.handleCpChange = this.handleCpChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleNameChange(e){
        let value = e.target.value;
        if(value == ''){
            this.setState({nameError: ''})
        } else {
            this.setState({name : value});
        }
    }

    handlePWChange(e){
        let value = e.target.value;
        if(value == '')
            this.setState({pwError: ''});
        else
            this.setState({password: value});
    }


    handleCpChange(e){
        let value = e.target.value;
        if(value == '')
            this.setState({capError:''});
        else
            this.setState({capital: value});
    }

    login(e){
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.password);
        fetch(SERVICE.END.LOGIN,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({
                username: this.state.name,
                password: this.state.password
            })
        }).then(function(response){
            return response.json();
        }).then(function(result){
            if(result.success){
                const path = '/end/home';
                browserHistory.push(path);
            }

        })


    }

    render(){
        return(
            <Panel>
                <Row className="show-grid">
                    <Col xs={12} sm={7} style={{paddingLeft:70+'px'}}>
                        <div className="title">
                            <h3>登录账户</h3>
                        </div>
                        <Form>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    用户名：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="请输入用户名"  onChange={this.handleNameChange} size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    密码：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="请输入密码"  onChange={this.handlePWChange} size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    验证码：
                                </Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="请输入验证码"  onChange={this.handleCpChange} size="15"/>
                                </Col>
                                <Col sm={4}>
                                    <Image src="" alt="photo"/>
                                </Col>
                            </FormGroup>
                            <FormGroup className="rui-center">
                                <button className="btn btn-danger btn-md rui-right-2" onClick={this.login}>登录</button>
                                <Link className="btn btn-primary btn-md"  to='/end/register'>注册</Link>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs={12} sm={5}>
                        <Image src={require('../../images/5.jpg')} rounded className="login-img"/>
                    </Col>
                </Row>
            </Panel>
        )
    }
}