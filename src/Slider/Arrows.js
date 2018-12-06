import React, { Component } from 'react';

const images = ["slide slide1", "slide slide2", "slide slide3"]


class Arrows extends Component {
    render(){
        return(
            <React.Fragment>
                <button
                    className="arrows arrow-left" 
                    onClick={this.props.onPrevClick}
                />
                <button
                    className="arrows arrow-right" 
                    onClick={this.props.onNextClick}
                />
                <div>
                    <div id="slider">
                        <div className= {images[this.props.currentSlide]}>
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
