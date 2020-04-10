import React , { Component }from 'react';
import './App.css';
import Map from './Components/Map'
class App extends Component {
  

  constructor(props){

    super(props);
    this.state = {
      pointer:{lat:30.741482,lng:76.768066},
    }

  }

  
  render(){
    const data = [
      {
        id: 1,
        name: "Sec 2",
        latlong:[30.764027, 76.791288],
        intensity:150,
        shade:0.15,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.752978, 76.788582],
        intensity:90,
        shade:0.10,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.739692, 76.781451],
        intensity:295,
        shade:0.50,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.746251, 76.777162],
        intensity:160,
        shade:0.25,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.735359, 76.804722],
        intensity:130,
        shade:0.25,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.729936, 76.809030],
        intensity:210,
        shade:0.45,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.738065, 76.812747],
        intensity:165,
        shade:0.35,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.759444, 76.766658],
        intensity:65,
        shade:0.10,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.724789, 76.743314],
        intensity:255,
        shade:0.45,
      },{
        id: 2,
        name: "Sec 3",
        latlong:[30.708435, 76.775200],
        intensity:175,
        shade:0.15,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.732375, 76.755217],
        intensity:210,
        shade:0.25,
      },
      {
        id: 2,
        name: "Sec 3",
        latlong:[30.722736, 76.799102],
        intensity:255,
        shade:0.45,
      },
      
    ];
    
    data[0].circle = {
      radius: 80,
      options: {
        strokeColor: '#FF0000',
        strokeOpacity: 0.15,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.15,
      }
    };
    return(
      <div className="App">
       <Map
    center={this.state.pointer}
    zoom={14}
    places={data}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqqW5pq28Qera8ScOykfyKpiIP5Cc0XAM"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100vh` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />, 
      </div>
    )
    }
 
}

export default App;
