/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Form,FormGroup,Col,FormControl,ControlLabel,Button} from 'react-bootstrap';
import 'whatwg-fetch';
import  SERVICE from '../../api/config';

export default  class Leave extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'mobile':'',
            'content':'',
            'message':''
        };
    }
    handleMobileChange =(e)=> {
        this.setState({'mobile': e.target.value})
    };
    handleContentChange = (e) => {
        this.setState({'content': e.target.value})
    };

    saveMessage = (e) => {
        e.preventDefault();
        fetch(SERVICE.MESSAGE,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({
                username: this.state.mobile,
                password: this.state.content
            })
        }).then((response)=> {
            return response.json();
        }).then((result) => {
            if(result.success){
               this.setState({'message':'添加成功'});
            } else {
                this.setState({'message': '添加失败'});
            }
        })
    };

    render(){
        return(
            <div>
                <h4>客户留言</h4>
                <Form horizontal>
                    <span className="tip-4">
                        {this.state.message}
                    </span>
                    <FormGroup controlId="formHorizontalTel" style={{marginBottom:0 +'px',marginTop:50 + 'px'}}>
                        <Col componentClass={ControlLabel} sm={2}>
                            联系方式：
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" placeholder="联系方式" onChange={this.handleMobileChange} />
                        </Col>
                   </FormGroup>
                    <FormGroup controlId="formHorizontalContent">
                        <Col componentClass={ControlLabel} sm={2}>
                            内容：
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                           <textarea className="form-control" placeholder="内容" onChange={this.handleContentChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" className="btn btn-danger" onClick={this.saveMessage}>
                              提交
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}