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
import 'whatwg-fetch';
import SERVICE from '../api/config';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            'HomeCultural':[],
            'HomeMessage' :[]
        };

    }
    componentDidMount(){
        let HomeCultural = [];
        let HomeMessage = [];
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'home','tip': 'cultural'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            HomeCultural = result.data;
            this.setState({'HomeCultural': HomeCultural});
        });
        fetch(SERVICE.FINDBYCONDITION,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({'remark': 'home','tip': 'message'})
        }).then((response) => {
            return response.json();
        }).then((result) => {
            HomeMessage = result.data;
            this.setState({'HomeMessage': HomeMessage});
        });
    };

    render(){
        return (
            <div className="home">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={3} mdOffset={5}><h1>企业文化</h1></Col>
                    </Row>
                    {this.state.HomeCultural.map((cultural, i) =>
                        <Row className = "show-grid" key={i+1}>
                            <Col xs={6} md={6}>
                                <Link to="/cultural">
                                    <Thumbnail alt="171x180" src={'http://localhost:3000/api/images?path='+cultural.url} style={{width:500 + 'px', height:360+'px'}}/>
                                </Link>
                            </Col>
                            <Col xs={6} md={6}>
                                <div dangerouslySetInnerHTML={{__html: cultural.content}}/>
                            </Col>
                        </Row>
                    )}
                    <Row className = "show-grid">
                        <h1 className="rui-center">产品中心</h1>
                        <ProductList width={280} height={346}/>
                    </Row>
                    <Row className = "show-grid">
                        <h1 className="rui-center">企业动态</h1>
                        <Col xs={12} md={6}>
                            <img src={require('../images/6.jpg')} className="left-img"/>
                            <div className="leftdown">
                                <button>
                                    <Link to="/message">经营红薯米粉如何实现快速盈利</Link>
                                </button>
                                <p>红薯米粉投资经营有妙招，想实现快速盈利，诚信是红薯米粉品牌长久经营的根本，也是做人的一个品质体现。</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <TopCarousel  height={125*5}>
                                {this.state.HomeMessage.map((message, i) =>
                                    <TopCarouselItem key={i}>
                                        <img src={'http://localhost:3000/api/images?path='+message.url} style={{width:142+'px',height:125+'px'}} data-bd-imgshare-binded="1"/>
                                        <Link to="/message">{message.title}</Link>
                                        <div dangerouslySetInnerHTML={{__html: message.content}}/>
                                    </TopCarouselItem>
                                )}
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