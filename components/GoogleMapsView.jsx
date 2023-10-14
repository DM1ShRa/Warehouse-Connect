"use client"

import { UserLocationContext } from "@context/UserLocationContext"
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api"
import Warehouse from "@models/prompt";
import { connectToDb } from "@utils/database";
import { useContext } from "react"
import { useEffect, useState } from "react";


function GoogleMapsView() {
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const [locations, setLocations] = useState([]);

    useEffect(() => {

        const fetchLocations = async () => {
            try {
                await connectToDb()
                const locations = await Warehouse.find({}, 'location').populate('creator')
                setLocations(locations);
            } catch (error) {
                console.error(error.message);
            }
        };


        fetchLocations();

    }, []);




    const containerStyle = {
        width: '100%',
        height: '70vh'
    }
    const cordinate = {
        lat: 19.032801,
        lng: 72.896355
    }
    console.log(userLocation)


    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                mapIds={['37a8b8b8bc0b1934']}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={userLocation}
                    options={{ mapId: '37a8b8b8bc0b1934' }}
                    zoom={12}
                >
                    {
                        locations.map(async (location) => {
                            try {
                                const coordinates = await getLocationCoordinates(location.name);
                                location.latitude = coordinates.latitude;
                                location.longitude = coordinates.longitude;
                            } catch (error) {
                                console.error(error.message);
                            }
                            <MarkerF
                                position={location}
                                icon={{
                                    url: './wh.png',
                                    scaledSize: {
                                        width: 50,
                                        height: 50
                                    }
                                }}
                            />
                        })
                    }


                </GoogleMap>
            </LoadScript>
        </div>
    )

}

export default GoogleMapsView