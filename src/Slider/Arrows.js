import React, { Component } from 'react';


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
                    <h1>{this.props.currentSlide}</h1>
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
