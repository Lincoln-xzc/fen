/**
 * Created by Htmler on 2016/8/16.
 */
import React from 'react';
import {render} from 'react-dom';
import {Carousel, Grid, Row, Col,Thumbnail} from 'react-bootstrap';
import {Link} from 'react-router';
import ProductList from '../midleware/productList.js';
import TopCarousel from '../midleware/topCarousel.js';
import TopCarouselItem from '../midleware/topCarouselItem.js';


export default class Home extends React.Component {
    render(){
        return (
            <div className="home">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={3} mdOffset={3}><h1>企业文化</h1></Col>
                        <Col xs={6} md={6}><h3 className="rui-right">电话号码:0599-3861537</h3></Col>
                    </Row>
                    <Row className = "show-grid">
                        <Col xs={6} md={6}>
                            <Link to="/cultural">
                                <Thumbnail alt="171x180" src="../images/logo.jpg" />
                            </Link>
                        </Col>
                        <Col xs={6} md={6}>
                            <p>禾谷渔粉在继承传统鱼粉烹饪技术的基础上将古法秘制的中草药香料配方与现代快餐加工完美结合，创新出浓香四溢、别具特色的经典美味。以飘香麻辣、奇香诱人的独特风味风靡全国，成为风味快餐的知名品牌、渔粉餐饮的第一品牌。</p>
                            <p>禾谷专用渔粉，以优质大米为材料，采用传统蒸煮工艺、现代低温室内烘干技术制造，100%不含添加剂及食用胶，禾谷渔粉美食从选料、备料清晰、切片到炒粉、煮汤、泡粉、煮粉、调口、无不专注和用心。禾谷渔粉高汤以多种草药额香料配方，加纯猪骨，严格按熬制流程和标准熬煮而成。细嫩爽滑的渔粉，香飘九巷的高汤，老少皆宜，男女通吃。“食之美不只在美味更在其神，平凡的渔粉在禾谷的精心烹饪中演绎如此精彩，必将使之传承百年、生生不息。”</p>
                        </Col>
                    </Row>
                    <Row className = "show-grid">
                        <h1 className="rui-center">产品中心</h1>
                        <ProductList width={280} height={346}/>
                    </Row>
                    <Row className = "show-grid">
                        <h1 className="rui-center">企业动态</h1>
                        <Col xs={12} md={6}>
                            <img src="/app/images/index_07.jpg"/>
                            <div className="leftdown">
                                <button>
                                    <Link to="/message">经营红薯米粉如何实现快速盈利</Link>
                                </button>
                                <p>红薯米粉投资经营有妙招，想实现快速盈利，诚信是红薯米粉品牌长久经营的根本，也是做人的一个品质体现。</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <TopCarousel  height={125*5}>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                                <TopCarouselItem>
                                    <img src="/app/images/6.jpg" style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                    <Link to="/message">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</Link>
                                    <p>修养身心，滋阴补阳，禾谷渔粉教您养生之道。</p>
                                </TopCarouselItem>
                            </TopCarousel>
                        </Col>
                    </Row>
                    <Row  className = "show-grid">
                        <Col xs={12} sm={12}>
                            <h1 className="rui-center">加盟专区</h1>
                        </Col>
                    </Row>
                    <Row  className = "show-grid">
                        <Col xs={12} sm={3}>
                            <h1 className="tip-1"><span className="glyphicon glyphicon-list-alt tip-2"></span></h1>
                            <h4 className="rui-block rui-center">申请资格</h4>
                            <p>我们拥有近十年连锁经营的成功经验，在业界具有极高的品牌知名度</p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <h1 className="tip-1"><span className="glyphicon glyphicon-user tip-2"></span></h1>
                            <h4 className="rui-block rui-center">申请资格</h4>
                            <p>我们拥有近十年连锁经营的成功经验，在业界具有极高的品牌知名度</p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <h1 className="tip-1"><span className="glyphicon glyphicon-phone tip-2"></span></h1>
                            <h4 className="rui-block rui-center">申请资格</h4>
                            <p>我们拥有近十年连锁经营的成功经验，在业界具有极高的品牌知名度</p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <h1 className="tip-1"><span className="glyphicon glyphicon-thumbs-up tip-2"></span></h1>
                            <h4 className="rui-block rui-center">申请资格</h4>
                            <p>我们拥有近十年连锁经营的成功经验，在业界具有极高的品牌知名度</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}