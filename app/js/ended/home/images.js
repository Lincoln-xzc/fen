/**
 * Created by Lincoln on 2016/8/23.
 */
import React from 'react';
import {render} from 'react-dom';
import {Table, Button, Modal, Form, FormGroup, ControlLabel, FormControl, Link, Col} from 'react-bootstrap';
import 'whatwg-fetch';
import  SERVICE from '../../../api/config';

export default class Images extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'images': [],
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
        let images = [];
        fetch(SERVICE.END.IMAGES.LIST,{
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            images = result.data;
            this.setState({'images': images});
        });

    }

    close =() => {
        this.setState({showModal: false});
    };

    open =(image) => {

        this.setState({showModal: true});
        this.setState({id: image.id});
        this.setState({name: image.name});
        this.setState({url: image.url});
        this.setState({size: image.size});
        this.setState({type: image.type});
        this.setState({upload_time: image.upload_time});
        this.setState({upload_name: image.upload_name});
    };

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };

    update =() => {
        fetch(SERVICE.END.IMAGES.UPDATE,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({
                'id': this.state.id,
                'name': this.state.name
            })
        }).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
        });
    };

    deleteBy = (id)=> {
        fetch(SERVICE.END.IMAGES.DELETE+id, {
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
        });
    };

    render(){
        return (
            <div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>图片</th>
                            <th>名称</th>
                            <th>大小</th>
                            <th>类型</th>
                            <th>创建人</th>
                            <th>上传时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.images.map((image, i) => <tr key={i+1}>
                            <td>{i+1}</td>
                            <td><img src={'http://localhost:3000/api/images?path='+ image.url} style={{width:60+'px',height: 40+'px'}}/></td>
                            <td>{image.name}</td>
                            <td>{image.size}</td>
                            <td>{image.type}</td>
                            <td>{image.upload_name}</td>
                            <td>{image.upload_time}</td>
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
                                    <FormControl type="text" value={this.state.name}  onChange={this.handleNameChange} size="30"/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                    大小：
                                </Col>
                                <Col sm={9}>
                                    {this.state.size}
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                   类型：
                                </Col>
                                <Col sm={9}>
                                    {this.state.type}
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                    上传人：
                                </Col>
                                <Col sm={9}>
                                    {this.state.upload_name}
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={3}>
                                    上传时间：
                                </Col>
                                <Col sm={9}>
                                    {this.state.upload_time}
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