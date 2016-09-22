/**
 * Created by Lincoln on 2016/8/23.
 */
import React from 'react';
import {render} from 'react-dom';
import {Table, Button} from 'react-bootstrap';
import 'whatwg-fetch';
import  SERVICE from '../../../api/config';

export default class Images extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'images': []
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
            console.log(this.state.images);
        });

    }

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
                                <Button bsStyle="success" bsSize="small" style={{marginBottom:5+'px'}}>详情</Button>
                                <Button bsStyle="danger" bsSize="small">删除</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}