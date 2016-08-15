/**
 * Created by Lincoln on 2016/8/15.
 */
import React from 'react';
import {render} from 'react-dom';
import Title from '../midleware/title.js';

export default class Production extends React.Component {
    render(){
        return (
            <div>
                <Title />
                Production
            </div>
        )
    }
}