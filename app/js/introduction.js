/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import Title from '../midleware/menu.js';
import {Grid,Row,Col,Panel} from 'react-bootstrap';
import ChildMenu from '../midleware/childMenu.js';

export default  class Introduction extends React.Component{
    render(){
        const menuTree = {
            'title':'企业实力',
            'menu':[
                {
                    id: 1,
                    url:'/introduction/message',
                    name:'企业简介'
                },
                {
                    id: 2,
                    url:'/introduction/honor',
                    name:'企业荣誉'
                },
                {
                    id:3,
                    url:'/introduction/culture',
                    name: '企业文化'
                },
                {
                    id:4,
                    url:'/introduction/demeanor',
                    name:'员工风采'
                }
            ]
        };
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={3} className="fl-fr">
                        <ChildMenu menuTree = {menuTree}/>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Panel className="rui-panel">
                            {this.props.children}
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
};