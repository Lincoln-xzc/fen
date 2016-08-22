/**
 * Created by Htmler on 2016/8/19.
 */
import React from 'react';
import {render} from 'react-dom';
import {Row,Col,Form, FormControl,ControlLabel,FormGroup,Image,Panel} from 'react-bootstrap';

export default class Register extends React.Component{
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
                                    <FormControl type="text" placeholder="请输入用户名"  size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    设置密码：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="请输入密码"  size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    确认密码：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="确认密码"  size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    邮箱：
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="请输入邮箱"  size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    验证码：
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="text" placeholder="请输入验证码" size="15"/>
                                </Col>
                                <Col sm={2}>
                                    <Image src="" alt="photo"/>
                                </Col>
                            </FormGroup>
                            <button type="submit" className="btn btn-primary btn-md rui-center">注册</button>
                        </Form>
                    </Col>
                </Row>
            </Panel>
        )
    }
}