// console.log("Hello WorldServer");

import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/WeatherApp';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <WeatherApp/>,
    document.getElementById('mount')
  );
});