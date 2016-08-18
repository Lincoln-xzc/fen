/**
 * Created by Lincoln on 2016/8/17.
 */
import React from 'react';
import {render} from 'react-dom';

export default  class Message extends React.Component {
    render(){
        return (
            <div>
                <h4>企业简介</h4>
                <div className="rui-text">
                    <p className="rui-center">
                        <img src="/app/images/7.jpg" />
                    </p>
                    <p>
                        <span>
                            <strong>&nbsp; &nbsp; 北京禾谷渔粉餐饮服务有限公司，是专业从事渔粉小吃和特许经营的大型全国连锁餐饮企业，以十余年餐饮研发，
                                门店营销的行业领先经验，全国三千余家加盟商及大众对公司自身品牌的认可，重金打造的又一优势高端品牌。旗下拥有：多个餐饮项目；
                                一座现代化大型食品加工工厂。截至2015年底，全国加盟店面辐射国内东北、华北、华东、华南等区，遍布全国22个省份，200余座城市。
                            </strong>
                        </span>
                    </p>
                    <p>
                        <span>
                            <strong>
                                &nbsp; &nbsp; 作为中国渔粉行业领军品牌，“禾谷渔粉”设立五大统一标准。统一商标、统一店面设计、统一操作和服务规范、统一产品品质和口味、统一广告宣传。严格按照快餐行业标准化模式拓展全国店面，科学食品创新。公司先后与国内外一线调味品供应商、米粉制品供应商达成战略同盟，为“禾谷渔粉”独家提供辅料配方。公司董事长耿强先生亲自配伍地道中草药秘方，升级渔粉汤底配方，牢牢稳固汤底技术全行业领先地位。
                            </strong>
                        </span>
                    </p>
                    <p>
                        <span>
                            <strong>
                                &nbsp; &nbsp;未来的“禾谷渔粉”将始终秉承“渔文化”核心。不断追求品牌的创新和突破，尊重传统餐饮文化，恪守诚信经营之道，注重企业品质提升，进一步扩大全国连锁的战略布局打造全国餐饮连锁行业黄金品牌！
                            </strong>
                        </span>
                    </p>
                    <p>
                        <br/>
                    </p>
                </div>
            </div>
        )
    }
}