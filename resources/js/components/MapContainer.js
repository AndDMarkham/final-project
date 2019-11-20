import React,  {Component} from 'react';
import { GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { googleKey } from '../../key.js';
import CurrentLocation from './Map';
const mapStyles = {
    width: '60px',
    height: '60px'
  };

  class MapContainer extends Component {
      
      constructor(props) {
        super(props);
        
        this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
          }
        };
      

    onMarkerClick (props, marker, e) {
      this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
      });
    }

    onClose (props) {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  
  render() {
    return (
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={'current location'} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
    );
  }
}
  
  export default GoogleApiWrapper({
    apiKey: googleKey
  })(MapContainer);