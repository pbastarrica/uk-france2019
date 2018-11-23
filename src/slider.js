import React, { Component } from 'react';
import './App.css';

let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

class Arrows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: 0};

    }
    slideLeft(){

        sliderImages[current - 1].style.display = 'block';
        current--;
    }
    slideRight(){

        sliderImages[current + 1].style.display = 'block';
        current++; 
    }
    
    render() {
        return(
            <React.Fragment>
        <button
            className="arrows arrow-left" 
            onClick={() => this.slideLeft()}
        >
            {this.state.current ? 0 : sliderImages.length-1 }
        </button>
        <button
            className="arrows arrow-right"
            onClick={() => this.slideRight() }
        >
            {this.state.current ? sliderImages.length : -1 }
        </button>
        <div>
        <div id="slider">
        <div className="slide slide1">
            <div className="slide-content">
        </div>
        </div> 
        <div className="slide slide2">
            <div className="slide-content">
        </div>
        </div> 
        <div className="slide slide3">
            <div className="slide-content">
        </div>
        </div> 
        </div>
        </div>
        </React.Fragment>
        );
        
    }
}
 


export default Arrows;