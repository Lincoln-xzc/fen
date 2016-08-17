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
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={3} className="fl-fr">
                        <ChildMenu name={'企业实力'}/>
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