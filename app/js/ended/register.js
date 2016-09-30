/**
 * Created by Htmler on 2016/8/19.
 */
import React from 'react';
import {render} from 'react-dom';
import {Row,Col,Form, FormControl,ControlLabel,FormGroup,Image,Panel} from 'react-bootstrap';
import 'whatwg-fetch';
import {browserHistory} from 'react-router';
import  SERVICE from '../../api/config';

export default class Register extends React.Component{
    //初始化默认值
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            repassword: '',
            caption: '1234',
            nameErr: '',
            passErr: '',
            rePassErr: '',
            capErr: ''
        };

        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
        this.rePassChange = this.rePassChange.bind(this);
        this.capChange = this.capChange.bind(this);
        this.register = this.register.bind(this);
    }

    //属性类型和默认属性
    /*static defaultProps = {

    };*/
   /* static propTypes = {
        username: React.PropTypes.string.isRequired,
        password: React.PropTypes.string.isRequired,
        repassword: React.PropTypes.string.isRequired,
        caption: React.PropTypes.string.isRequired
    };*/
    userNameChange(e){
        let value = e.target.value;
        if(value === '')
            this.setState({nameErr: ''});
        else
            this.setState({username: value});

    };
    passWordChange(e){
        let value = e.target.value;
        if(value == '')
            this.setState({passErr: ''});
        else
            this.setState({password: value});
    }
    rePassChange(e){
        let value = e.target.value;
        if(value == '')
            this.setState({rePassErr: ''});
        if(value !== this.state.password)
            this.setState({rePassErr: '两次输入的密码不一样'});
        else
            this.setState({repassword: value});
    }
    capChange(e){
        let value = e.target.value;
        if(value == '')
            this.setState({capErr: ''});
        else
            this.setState({caption: value});
    }
    register(e){
        e.preventDefault();
        fetch(SERVICE.END.REGISTER,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                caption: this.state.caption
            })
        }).then(function(response){
            return response.json();
        }).then(function(result){
            if(result.success){
                const path = '/end/login';
                browserHistory.push(path);
            }
        })
    }
    render(){
        return(
            <Panel>
                <Row className="show-grid">
                    <Col xs={12} sm={8} smOffset={3}>
                        <Form>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    用户名：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="请输入用户名"  size="30" onChange={this.userNameChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    设置密码：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="请输入密码"  size="30" onChange={this.passWordChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    确认密码：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="repassword" placeholder="确认密码"  size="30" onChange={this.rePassChange}/>
                                </Col>
                            </FormGroup>
                           {/* <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    邮箱：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="请输入邮箱"  size="30"/>
                                </Col>
                            </FormGroup>*/}
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    验证码：
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="text" placeholder="请输入验证码" size="15" onChange={this.capChange}/>
                                </Col>
                                <Col sm={2}>
                                    <Image src="" alt="photo"/>
                                </Col>
                            </FormGroup>
                            <button type="submit" className="btn btn-primary btn-md rui-center" onClick={this.register}>注册</button>
                        </Form>
                    </Col>
                </Row>
            </Panel>
        )
    }
}