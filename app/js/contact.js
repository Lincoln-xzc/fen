/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import {Grid, Col, Row, Panel} from 'react-bootstrap';

export default class Contact extends React.Component {
    render(){
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={3} className="fl-fr">
                            <ChildMenu name={'联系我们'}/>
                        </Col>
                        <Col xs={12} sm={8}>
                            <Panel className="rui-panel">
                                {this.props.children}
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}