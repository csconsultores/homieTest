// @ts-ignore
import React, { useCallback } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { MapContainer } from './MapSection_Style';
interface IProps {
    google: any;
    locations: any;
    //selectedId: any;
}

const image =
    "https://homie.mx/assets/maps-icons/rectangle-purple.svg";

// const imageSelected =
//     "https://homie.mx/assets/maps-icons/rectangle-red-homie.svg"

const MapSection = ({...props}: IProps) =>{
    const displayMarkers = useCallback(() => {
        return props.locations.map((location: any, index: any) => {
            return <Marker key={index + location.price} position={location.location}
                label={location.price}
                icon={image}

                onClick={() => {
                    let department = document.getElementById(location.id);
                    if (department) {
                        department.scrollIntoView();
                    }

                }} />
        })
    }, [props.locations])

    // useEffect(()=>{
    //     if (props.locations){
    //         displayMarkers(props.selectedId);   
    //     }
    // }, [displayMarkers, props.selectedId, props.locations])

    



        return (
            <MapContainer id="mapContainer">
                {props.locations &&
                    <Map google={props.google}
                        style={{ width: '455px', height: '100%', position: 'relative' }}
                        center={{
                            lat: 19.432720,
                            lng: -99.133200
                        }}
                        zoom={10}
                    >
                        {displayMarkers()}
                    </Map>
                }

            </MapContainer>
        )

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBkOP3tB5Er7xi4kZ7c4wSePe4e0KJJfmE'
})(MapSection);