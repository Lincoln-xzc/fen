/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import ChildMenu from '../midleware/childMenu.js';
import {Grid, Col, Row, Panel} from 'react-bootstrap';

export default class Message extends React.Component {
    render(){
        const menuTree = {
            'title':'联系我们',
            'menu':[
                {
                    id: 1,
                    url:'/message/leave',
                    name:'客户留言'
                }
            ]
        };
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={3} className="fl-fr">
                        <ChildMenu menuTree={menuTree}/>
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
}