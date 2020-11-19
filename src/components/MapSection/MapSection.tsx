import React from 'react';
import { Map,GoogleApiWrapper } from 'google-maps-react';

import {  MapContainer } from './MapSection_Style';
interface IProps {
    google:any;
    locations: any;
}
export class MapSection extends React.Component<IProps> {
    onMarkerClick(){
        console.log("here");
    }   
    
    render() {
        const mapStyles = {
            width: '437px',
            height: '100%',
          };
          var bounds = new this.props.google.maps.LatLngBounds();
for (var i = 0; i < this.props.locations.length; i++) {
  bounds.extend(this.props.locations[i]);
}
        return (
            <MapContainer id="MapContainer">
                <Map 
                    google={this.props.google} 
                    style={mapStyles} 
                    initialCenter={{ lat: 19.421875, lng: -99.077674}}
                    bounds={bounds}
                >
                </Map>
            </MapContainer>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBkOP3tB5Er7xi4kZ7c4wSePe4e0KJJfmE'
  })(MapSection);