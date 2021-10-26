//https://www.codewars.com/kata/587593285448632b8d000143
async function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;

  const cart = await OrderAPI.getShoppingCartAsync(user);
  shoppingCart = cart;

  const profile = await CustomerAPI.getProfileAsync(user);
  zipCode = profile.zipCode;

  shippingRate = calculateShipping(shoppingCart, zipCode);

  const success = OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  orderSuccessful = success;

  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
