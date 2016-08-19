/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';
import {Form,FormGroup,Col,FormControl,ControlLabel,Button} from 'react-bootstrap';

export default  class Leave extends React.Component{
    render(){
        return(
            <div>
                <h4>客户留言</h4>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalTel">
                        <Col componentClass={ControlLabel} sm={2}>
                            联系方式：
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" placeholder="联系方式" />
                        </Col>
                   </FormGroup>
                    <FormGroup controlId="formHorizontalContent">
                        <Col componentClass={ControlLabel} sm={2}>
                            内容：
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                           <textarea className="form-control" placeholder="内容"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" className="btn btn-danger">
                              提交
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}