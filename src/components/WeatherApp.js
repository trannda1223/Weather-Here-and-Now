import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.

 how do i find the location
 */



 //how do i connect this file with my html file??
class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      city: 'david',
    };

    //get the lat and long form geolocation
    // if(navigator.geolocation){

    //   navigator.geolocation.getCurrentPosition((pos) => {
    //     let lat = pos.coords.latitude;
    //     let long = pos.coords.longitude;

    //     let latStr = `lat=${lat}`;
    //     let longStr = `lon=${long}`;

    //     fetch(`/weather/${latStr}&${longStr}`, {method: "GET"})
    //       .then((response) => response.json())
    //       .then((responseData) => {
    //         console.log('dataFromAPI: ', responseData.name)
    //         this.setState({city: responseData.name})
    //       })
    //       .catch((error) => {
    //          console.log('error: ', error);
    //        });
    //   })  

    // } else {
    //   console.log('geolocation not supported');
    // }
  }
 
  render() {
    return (
      <div>
        <h1>showMe{this.state.city}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Weather: {this.state.count}
        </button>
      </div>
    );
  }

  componentWillMount() {

    //******* need to send my data to REACT ***********//
    //need handler WHEN  it changes to update my state then to update my view


    //willMount doesnt have access to state??

    // console.log('david');

    

    // const signtxt = 

    // fetch('/horoscope/' + signtxt , {method: "GET"} )
    //     .then((response) => response.json())
    //     .then((responseData) => {console.log('data: ', responseData)})
    //     .catch((error) => {
    //          console.log('error: ', error);
    //        });
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
