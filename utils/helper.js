export default async function getLatLngFromPincode(pincode) {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${pincode}&key=AIzaSyBSPuG8DcDnr6KB_H1DkCci2j2tKHmH_Nw`
    );
  
    const data = await response.json();
  
    if (data.status === "OK") {
      const coordinates = data.results[0].geometry.location;
      return coordinates;
    } else {
      throw new Error(
        `Could not get latitude and longitude for pincode: ${pincode}`
      );
    }
  }