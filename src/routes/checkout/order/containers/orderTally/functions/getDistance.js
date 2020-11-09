const getDistance = ({
  storeLocation,
  deliveryLocation,
  getDistanceCallback,
}) => {
  // Location origin
  let origin = new window.google.maps.LatLng(
    storeLocation.lat,
    storeLocation.lng
  );

  // Location destination
  let destination = new window.google.maps.LatLng(
    deliveryLocation.lat,
    deliveryLocation.lng
  );

  // Define distance matrix
  let distanceMatrix = new window.google.maps.DistanceMatrixService();

  // // Distance matrix callback
  // const getDistanceCallback = (response, status) => {
  //   if (status === "OK") {
  //     // Set divide result by 1000 to get km
  //     let result = response.rows[0].elements[0].distance.value / 1000;

  //     // Set result to state
  //     setDistance(result);
  //   }
  // };

  // Get distance between origin and destination
  distanceMatrix.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: "DRIVING",
    },
    getDistanceCallback
  );
};

export default getDistance;
