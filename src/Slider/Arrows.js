import React, { Component } from 'react';




class Arrows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }
    render(){

        return(
            <React.Fragment>
                <button
                    className="arrows arrow-left" 
                    onClick={() => this.state.current === 2 ? 1 :
                    console.log(this.state.current)      
                    }>

                </button>
                <button
                    className="arrows arrow-right" 
                    onClick={() => this.state.current === 2 ? 1 : 
                    console.log(this.state.current)
                    }>
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