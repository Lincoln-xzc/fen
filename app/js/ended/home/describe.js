/**
 * Created by Lincoln on 2016/8/23.
 */
import React from 'react';
import {render} from 'react-dom';
import Select from 'react-select';
import {Table, Button, Modal, Form, FormGroup, ControlLabel, FormControl, Link, Col} from 'react-bootstrap';
import 'whatwg-fetch';
import  SERVICE from '../../../api/config';


export default class Describe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'main': [],
            'images': [],
            'contents': [],
            'showModal': false,
            'id': '',
            'name': '',
            'url': '',
            'size': '',
            'type': '',
            'upload_time': '',
            'upload_name': ''
        }
    };

    componentDidMount(){
        let main = [];
        fetch(SERVICE.END.MAINS.LIST,{
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            main = result.data;
            this.setState({'main': main});
        });

    }

    close =() => {
        this.setState({showModal: false});
    };

    add =() => {
        this.setState({showModal: true});
        let images = [];
        let contents = [];
        fetch(SERVICE.END.IMAGES.LIST,{
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            images = result.data;
            this.setState({'images': images});
            console.log(result.data);
        });

        fetch(SERVICE.END.FONTS.LIST,{
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            contents = result.data;
            this.setState({'contents': contents});
        });
    };
    logChange = (val) =>{
        console.log(val);
    };

    render(){
        var options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
        return (
            <div>
                <Button bsStyle="success" bsSize="small" style={{marginBottom:5+'px'}} onClick={(e) => this.add()}>详情</Button>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>图片</th>
                        <th>标题</th>
                        <th>内容</th>
                        <th>标记</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.main.map((main, i) => <tr key={i+1}>
                        <td>{i+1}</td>
                        <td><img src={'http://localhost:3000/api/images?path='+ main.url} style={{width:60+'px',height: 40+'px'}}/></td>
                        <td>{main.title}</td>
                        <td>{main.content}</td>
                        <td>{main.recommand}</td>
                        <td>
                            <Button bsStyle="success" bsSize="small" value={image} style={{marginBottom:5+'px'}} onClick={(e) => this.open(image)}>详情</Button>
                            <Button bsStyle="danger" bsSize="small" onClick={(e) => this.deleteBy(image.id)}>删除</Button>
                        </td>
                    </tr>)}
                    </tbody>
                </Table>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>图片详情</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                    图片名：
                                </Col>
                                <Col sm={9}>
                                   <Select name="form-field-name"
                                       value="one"
                                       options = {options}
                                       onChange = {this.logChange}
                                   />
                                </Col>
                            </FormGroup>
                            <FormGroup style={{height: 100+'px'}}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    图片：
                                </Col>
                                <Col sm={9}>
                                    <img src={'http://localhost:3000/api/images?path='+ this.state.url} style={{width:200+'px',height: 100+'px'}}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>关闭</Button>
                        <Button onClick={this.update}>更新</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}