import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }
    
    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    
    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60 );   
        const minutes = Math.floor((time/1000/60) % 60 );
        const hours = Math.floor((time/(1000*60*60)) % 24 );
        const days = Math.floor((time/(1000*60*60*24)));

  
        this.setState({days, hours, minutes, seconds});
    } 
    render() {
        return (
            
        <div className="header">
            <div className="App-title">{this.props.deadline}</div>
            <div>
                <div className="Clock-days">{this.leading0(this.state.days)}<span className="time">Days</span></div>   
                <div className="Clock-hours">{this.leading0(this.state.hours)}<span className="time">Hours</span></div>     
                <div className="Clock-minutes">{this.leading0(this.state.minutes)}<span className="time">Minutes</span></div>    
                <div className="Clock-seconds">{this.leading0(this.state.seconds)}<span className="time">Seconds</span></div>
            </div>
            <div className= "center">
                <a href="https://www.google.com/maps/@48.9301711,-0.9914193,6z" target="_blank" rel="noopener noreferrer">
                    <img src="./map.png" width="32" height="32" alt="Google Maps" />
                </a>
                <a href="https://docs.google.com/spreadsheets/d/1_hiKzfbGHDecEOrDhtDaPz2XZKUFcYaPFkuksvEDrKE/edit#gid=0" target="_blank" rel="noopener noreferrer">
                    <img src="./drive.png" width="32" height="32" alt="Drive sheet" />
                </a>    
            </div>
        </div>
         
         
        )
    }

} 
export default Clock;
