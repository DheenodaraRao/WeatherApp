import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './Day';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id ="display">
          {data.map(x => <Day day = {x.day} weather = {x.weather} temperature = {x.temperature} />)}
        </div>
      </div>
    );
  }
}

const data = [
  {
    day: "Monday",
    weather: "sunny",
    temperature: 32
  },
  {
    day: "Tuesday",
    weather: "sunny",
    temperature: 34
  },
  {
    day: "Wednesday",
    weather: "rainny",
    temperature: 17
  },
  {
    day: "Thurday",
    weather: "cloudy",
    temperature: 30
  },
  {
    day: "Friday",
    weather: "cloudy",
    temperature: 30
  },
  {
    day: "Saturday",
    weather: "rainny",
    temperature: 19
  },
  {
    day: "Sunday",
    weather: "snowy",
    temperature: -5
  }

];
