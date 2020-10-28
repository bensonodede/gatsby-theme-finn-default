const getDeliveryFee = ({ distance, costPerKm, minDeliveryFee }) => {
  // Calculate delivery fee
  let fee = distance * costPerKm;

  // Round delivery fee to the nearest 10
  fee = Math.round(fee / 10) * 10;

  // If fee is less than minimum delivery fee; return minimum delivery fee
  if (fee < minDeliveryFee) {
    return minDeliveryFee;
  } else {
    return fee;
  }
};

export default getDeliveryFee;
