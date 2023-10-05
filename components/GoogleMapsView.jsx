"use client"

import { UserLocationContext } from "@context/UserLocationContext"
import { GoogleMap,LoadScript, Marker, MarkerF } from "@react-google-maps/api"
import { useContext } from "react"

function GoogleMapsView() {
    const {userLocation , setUserLocation} = useContext(UserLocationContext);

    const containerStyle={
        width: '100%',
        height:'70vh'
    }
    const cordinate={
        lat: 19.032801 ,
        lng:72.896355
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
                options={{mapId:'37a8b8b8bc0b1934'}}
                zoom={12}
            >
                <MarkerF
                position={userLocation}
                icon={{
                    url:'./wh.png',
                    scaledSize:{
                        width : 50,
                        height : 50
                    }
                }}
                />
            </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default GoogleMapsView