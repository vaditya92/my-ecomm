export const addItemToCart = (cartItems, item) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === item.id);
  if (existingCartItems) {
    return cartItems.map(cartItem => 
      cartItem.id === item.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : {...cartItem} 
    );
  }
  return [...cartItems, { ...item, quantity: 1}]
}

export const removeItemFromCart = (cartItems, item) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingCartItems.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== item.id)
  }

  return cartItems.map(
    cartItem =>
    cartItem.id === item.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
};