/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
<<<<<<< HEAD
import Title from '../midleware/title.js';
import {Carousel} from 'react-bootstrap';
export default  class Index extends React.Component{
    render(){
        return (
            <div className = ''>
                <Title />
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h3>Index</h3>
=======
import Menu from '../midleware/menu.js';
import Footer from '../midleware/footer.js';
export default  class Index extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
>>>>>>> 1b6e270bb47f01bd36e30e22ea8acb9dad055b03
            </div>
        )
    }
};