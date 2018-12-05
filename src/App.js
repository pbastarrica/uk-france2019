import React, { Component } from 'react';
import Clock from './Clock';
import Slider from './Slider';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'March 28, 2019'
        }
    }

    render() {
        return (

        <div className="App">
            <Clock
                deadline={this.state.deadline}
            />
            <Slider/>
            
        </div>

        )
    }
}
// <Arrows/>
export default App;
