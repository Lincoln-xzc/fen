/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import {Grid, Col, Row, Panel} from 'react-bootstrap';
import ChildMenu from '../midleware/childMenu.js';

export default class Center extends React.Component {
    render(){
        const menuTree = {
            'title':'产品中心',
            'menu':[
                {
                    id: 1,
                    url:'/center/show',
                    name:'产品展示'
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
}