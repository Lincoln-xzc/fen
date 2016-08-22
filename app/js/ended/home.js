/**
 * Created by Lincoln on 2016/8/22.
 */
import React from 'react';
import {render} from 'react-dom';
import ChildMenu from '../../midleware/childMenu.js';
import {Panel,Row,Col} from 'react-bootstrap';

export default  class Home extends React.Component{
    render(){
        const menuTree ={
            'title':'后台管理',
            'menu':[
                {
                    id: 1,
                    url:'/end/home/upload',
                    name:'图片上传'
                },
                {
                    id:2,
                    url:'/end/home/images',
                    name:'图片列表'
                },
                {
                    id:3,
                    url:'/end/home/fonts',
                    name:'文字列表'
                },
                {
                    id:4,
                    url:'/end/home/describe',
                    name:'图文详情'
                }
            ]
        };
        return(
          <Row className="show-grid">
               <Col xs={12} sm={3} className="fl-fr">
                    <ChildMenu menuTree = {menuTree} />
               </Col>
               <Col xs={12} sm={8}>
                    <Panel>
                        {this.props.children}
                    </Panel>
               </Col>
          </Row>
        )
    }
}