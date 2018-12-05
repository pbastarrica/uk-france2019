import React, { Component } from 'react';
import Arrows from './Arrows';

class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'March 28, 2019'
        }
    }
    render(){
        return (
            <div>
                <Arrows/>                
            </div>
        )
    }
}

export default Current;
