// @ts-ignore
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { MapContainer } from './MapSection_Style';
interface IProps {
    google: any;
    locations: any;
}

export class MapSection extends React.Component<IProps> {
    onMarkerClick() {
        console.log("here");
    }

    render() {

        return (
            <MapContainer id="mapContainer">
                {this.props.locations &&
                                <Map google={this.props.google}
                    style={{ width: '455px', height: '100%', position: 'relative' }}
                    center={{
                        lat: 19.432720,
                        lng: -99.133200
                    }}
                    zoom={10}
                >
                    {this.props.locations.map((location: any) => (
                        <Marker
                            position={location.location}
                            label={location.price}
                        />
                    ))}

                </Map>
                
                }

            </MapContainer>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBkOP3tB5Er7xi4kZ7c4wSePe4e0KJJfmE'
})(MapSection);