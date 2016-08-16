/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import Menu from '../midleware/menu.js';
import Footer from '../midleware/footer.js';
export default  class Index extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
};