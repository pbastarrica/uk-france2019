import React, { Component } from 'react';
import Clock from '../../uk-france2019/src/Clock';
import Arrows from '../../uk-france2019/src/slider';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'April 04, 2019'
        }
    }

    render() {
        return (

        <div className="App">
            <Clock
                deadline={this.state.deadline}
            />
            <Arrows/>
            
        </div>

        )
    }
}

export default App;
