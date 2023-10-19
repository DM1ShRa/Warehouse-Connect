import { UserLocationContext } from "@context/UserLocationContext";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import getLatLngFromPincode from "@utils/helper";

function GoogleMapsView({ post }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const pincodes = [400703, 400088, 400706, 410206, 400074, 422306];

    const getDistance = (lat1, lon1, lat2, lon2) => {
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      return dist;
    };

    const fetchLocations = async () => {
      const coordinatesPromises = pincodes.map((pincode) =>
        getLatLngFromPincode(pincode)
      );

      const coordinates = await Promise.all(coordinatesPromises);

      const updatedLocations = coordinates.map((coordinate) => ({
        lat: coordinate.lat,
        lng: coordinate.lng,
      }));

      setLocations(updatedLocations);

      const userLat = userLocation.lat;
      const userLng = userLocation.lng;

      const updatedLocationsWithDistance = updatedLocations.map((location) => {
        const distance = getDistance(userLat, userLng, location.lat, location.lng);

        if (distance <= 5) {
          return { ...location, icon: "./wh.png" };
        } else if (distance <= 10) {
          return { ...location, icon: "./white.png" };
        } else {
          return { ...location, icon: "./grey.png" };
        }
      });

      setLocations(updatedLocationsWithDistance);
    };

    fetchLocations();
  }, [userLocation]);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} mapIds={["37a8b8b8bc0b1934"]}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          options={{ mapId: "37a8b8b8bc0b1934" }}
          zoom={12}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location}
              icon={{
                url: location.icon,
                scaledSize: {
                  width: 70,
                  height: 70,
                },
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapsView;
