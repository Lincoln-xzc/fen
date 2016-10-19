/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import Menu from '../midleware/menu.js';
import Footer from '../midleware/footer.js';
import {Carousel, Grid, Row, Col,Thumbnail} from 'react-bootstrap';
import 'whatwg-fetch';
import SERVICE from '../api/config';

export default  class Index extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            'HomeCarousels':[],
            'HomeCultural':[],
            'HomeCenter':[],
            'HomeMessage':[],

        }
    }
    componentDidMount(){
        let HomeCarousel = [];
        let HomeCultural = [];
        let HomeCenter = [];
        let HomeMessage = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'home','tip': 'carousel'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            HomeCarousel = result.data;
            this.setState({'HomeCarousels': HomeCarousel})
        })
    };
    render(){

        return (
            <div>
                <Menu />
                <div className="roof"></div>
                <Carousel className="rui_carousel">
                    {this.state.HomeCarousels.map((carousel, i) =>
                        <Carousel.Item key={i+1}>
                            <img width={1420} height={700} alt="1000x700" sylt={{'height':700+'px'}} src={'http://localhost:3000/api/images?path='+carousel.url}/>
                            <Carousel.Caption>
                            <h3>carousel.name</h3>
                            <p>carousel.title</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
                {this.props.children}
                <Footer />
            </div>
        )
    }
};