import React, { Component } from 'react';
import Clock from '../../uk-france2019/src/Clock';
import Slider from '../../uk-france2019/src/Slider';
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
