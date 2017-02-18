import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.

 how do i find the location
 */



 //how do i connect this file with my html file??
class WeatherApp extends React.Component {
  constructor(props) {
    super(props);


    //can i not render until i get the actual data?????????????/*****************
    this.state = {
      count: '',
      city: '',
      weather: '',
      icon: '',
      temperature: '',
      wind: '',
    };

    //**************WANT TO: when I get the data change my state!!!!!!!!!!!!!!!!!!!************
    /*
    //want to fetch the data at willMount then...
    1. when i get the data
    2. update the state
    3. re-render when state gets updated
    */
    
    this.handleData = this.handleData.bind(this);
  }//constructor
 
  render() {
    return (
      <div>
        <div>City: {this.state.city}</div>
        <div>Weather: {this.state.weather}</div>
        <img src ={this.state.icon}></img>
        <div>{this.state.temperature}</div>
        <div>{this.state.wind}</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Weather: {this.state.count}
        </button>
      </div>
    );
  }//render

  handleData(data){

    var wind = function(degrees){
      if(degrees >= 337.5 && degrees < 22.5){
        return 'N';
      }
      if(degrees >= 22.5 && degrees < 67.5){
        return 'NE';
      }
      if(degrees >= 67.5 && degrees < 112.5){
        return 'E';
      }
      if(degrees >= 112.5 && degrees < 157.5){
        return 'SE';
      }
      if(degrees >= 157.5 && degrees < 202.5){
        return 'S';
      }
      if(degrees >= 202.5 && degrees < 247.5){
        return 'SW';
      }
      if(degrees >= 247.5 && degrees < 292.5){
        return 'W';
      }
      if(degrees >= 292.5 && degrees < 337.5){
        return 'NW';
      }
    }

    this.setState({
      city: data.name, 
      weather: data.weather[0].description,
      icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: `${Math.round((data.main.temp-273.15) * 9/5 + 32)}F`,
      wind: `${wind(data.wind.deg)} ${data.wind.speed} knots`,
    });
  }

  componentWillMount() {
    
    //******* need to send my data to REACT ***********//
    //need handler WHEN  it changes to update my state then to update my view

    //willMount does have access to state!!
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;

        let latStr = `lat=${lat}`;
        let longStr = `lon=${long}`;

        console.log('lat: ', latStr, 'long: ', longStr);

        fetch(`/weather/${latStr}&${longStr}`, {method: "GET"})
          .then((response) => response.json())
          .then((responseData) => {
            // console.log('david');
            console.log('dataFromAPI: ', responseData.name);
            // this.setState({city: 'david'});
            this.handleData(responseData);
            // this.setState({city: responseData.name})
          })
          .catch((error) => {
             console.log('error: ', error);
           });
      })  

    } else {
      console.log('geolocation not supported');
    }
  }//mount



}
export default WeatherApp;
