import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import css from './GoogleMap.css';

export class GoogleMap extends Component {
  render() {
    return (
      <Map 
      initialCenter={{
        lat: 51.495899,
        lng: -0.2275376
        }}
      className={css.googleMap}
      google={this.props.google}
      zoom={11}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDDtsDdiFwnaIJY80F-5calOZyFFPXHfSQ"),
})(GoogleMap)