import React,  {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { googleKey } from '../../key.js';

const mapStyles = {
    width: '54vw',
    height: '80vh'
  };

class NewMap extends Component {
      
    constructor(props) {
        super(props);
        console.log('this.props', this.props)
        this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
        }
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onClose = this.onClose.bind(this)
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
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 50.065,
         lng: 14.46
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
  
  export default GoogleApiWrapper({
    apiKey: googleKey
  })(NewMap);