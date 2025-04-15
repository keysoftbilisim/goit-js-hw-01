function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // 170
console.log(getShippingMessage("Germany", 80, 20)); // 100
console.log(getShippingMessage("Sweden", 100, 20)); // 120