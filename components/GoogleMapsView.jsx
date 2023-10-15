import React, { useState, useEffect, useContext } from 'react'; // Import React and necessary hooks
import { UserLocationContext } from "@context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import locations from "@seeds/cities";

function GoogleMapsView({ post }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const containerStyle = {
    width: '100%',
    height: '70vh'
  };
  
  const centerLocation = post?.location || userLocation;

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={['37a8b8b8bc0b1934']}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerLocation}
          options={{ mapId: '37a8b8b8bc0b1934' }}
          zoom={12}
        >
          {locations.map((location, index) => (
            <MarkerF
              key={index}
              position={location}
              icon={{
                url: './wh.png',
                scaledSize: {
                  width: 50,
                  height: 50
                }
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapsView;
