import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const LocationMap = () => {
    // const dispatch = useDispatch();
    // const placemarkClickHandler = (adress)=>{
    //     dispatch(setCurrentAdress(adress))
    // }

    return (
        <section className="location-map">
            <YMaps>
                <div className={`digital__map`} id="map">
                    <Map defaultState={{ center: [44.948237, 34.100318], zoom: 12 }} width="100%">
                        <Placemark
                            geometry={[44.948239, 34.100325]}
                            // onClick={()=>placemarkClickHandler(adress)}
                        />
                    </Map>
                </div>
            </YMaps>
        </section>
    )
};

export default LocationMap;
