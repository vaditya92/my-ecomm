export const addItemToCart = (cartItems, item) => {
  console.log('cartItems: ', cartItems);
  console.log('item: ', item);
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