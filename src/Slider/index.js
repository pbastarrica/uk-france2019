import React, { Component } from 'react';
import Arrows from './Arrows';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
        };
    }
    handleNextSlide() {
        if (this.state.position === 2) {
        this.setState(state => ({
            position: 0,
        }));  
        }
        else {
        this.setState(state => ({
            position: state.position + 1,
        }));
    }
    }
    handlePrevSlide() {
        if (this.state.position === 0) {
            this.setState(state => ({
                position: 2,
        }));  
        }
        else {
        this.setState(state => ({
            position: state.position - 1,
        }));
    }
    }
    render(){
        return (
            <div>
                <Arrows
                    currentSlide={this.state.position}
                    onNextClick={this.handleNextSlide.bind(this)}
                    onPrevClick={this.handlePrevSlide.bind(this)}
                />                
            </div>
        )
    }
}

export default Slider;
