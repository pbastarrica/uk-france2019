import React, { Component } from 'react';
import Clock from '../../uk-france2019/src/Clock';
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
            <div className="App-title">{this.state.deadline}</div>
            <Clock
                deadline={this.state.deadline}
            />

        </div>
        )
    }
} 
export default App;
