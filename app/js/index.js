/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import Menu from '../midleware/menu.js';
import Footer from '../midleware/footer.js';
import {Carousel, Grid, Row, Col,Thumbnail} from 'react-bootstrap';


export default  class Index extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                <div className="roof"></div>
                <Carousel className="rui_carousel">
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src={require('../images/1.jpg')}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src={require('../images/2.jpg')}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src={require('../images/3.jpg')}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src={require('../images/4.jpg')}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>sdfsdr.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {this.props.children}
                <Footer />
            </div>
        )
    }
};