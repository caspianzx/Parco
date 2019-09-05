import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
  position: 'relative'
};

export class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        };
        this.onMapClicked = this.onMapClicked.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
  }


    onMarkerClick(props, marker, e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClicked (props) {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            })
        }
    };


    render() {
        let pos = {lat: 1.2751, lng: 103.8435}

        return (
        <Map
            google={this.props.google}
            zoom={12}
            onClick={this.onMapClicked}
            style={mapStyles}
            initialCenter={{
             lat: 1.274231,
             lng: 103.845569
            }}
            onClick={this.onMapClicked}
          >
        <Marker onClick={this.onMarkerClick}
                name={'GA'} />
        <Marker
        onClick={this.onMarkerClick}
        name={'100am'}
        position={pos} />

        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        <div>
            <h1>{this.state.selectedPlace.name}</h1>
        </div>
        </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDW4ONvvWPJw4dnSIu1UVQQRjvZ0bCHL68'
})(MapContainer);