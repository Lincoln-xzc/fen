/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';
import {Carousel, Grid, Row, Col,Thumbnail} from 'react-bootstrap';
import {Link} from 'react-router';
import '../style/app.css';
import ProductList from '../midleware/productList.js';
import TopCarousel from '../midleware/topCarousel.js';
export default class Home extends React.Component {
    render(){
        return (
            <div className="home">
                <div className="roof"></div>
                <Carousel className="rui_carousel">
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src="/app/images/1.jpg"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src="/app/images/2.jpg"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src="/app/images/3.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1420} height={700} alt="1000x700" src="/app/images/4.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>sdfsdr.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={3} mdOffset={3}><h1>企业文化</h1></Col>
                        <Col xs={6} md={6}><h3 className="rui-right">电话号码:0599-3861537</h3></Col>
                    </Row>
                    <Row className = "show-grid">
                        <Col xs={6} md={6}>
                            <Link to="/cultural">
                                <Thumbnail alt="171x180" src="/app/images/5.jpg" />
                            </Link>
                        </Col>
                        <Col xs={6} md={6}>
                            <p>禾谷渔粉在继承传统鱼粉烹饪技术的基础上将古法秘制的中草药香料配方与现代快餐加工完美结合，创新出浓香四溢、别具特色的经典美味。以飘香麻辣、奇香诱人的独特风味风靡全国，成为风味快餐的知名品牌、渔粉餐饮的第一品牌。</p>
                            <p>禾谷专用渔粉，以优质大米为材料，采用传统蒸煮工艺、现代低温室内烘干技术制造，100%不含添加剂及食用胶，禾谷渔粉美食从选料、备料清晰、切片到炒粉、煮汤、泡粉、煮粉、调口、无不专注和用心。禾谷渔粉高汤以多种草药额香料配方，加纯猪骨，严格按熬制流程和标准熬煮而成。细嫩爽滑的渔粉，香飘九巷的高汤，老少皆宜，男女通吃。“食之美不只在美味更在其神，平凡的渔粉在禾谷的精心烹饪中演绎如此精彩，必将使之传承百年、生生不息。”</p>
                        </Col>
                    </Row>
                    <ProductList width={280} height={346}/>
                    <TopCarousel />
                </Grid>
            </div>
        )
    }
}