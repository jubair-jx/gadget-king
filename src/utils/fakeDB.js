const addToCart = (id) => {
  let shoppingCart = {};
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  }

  //add new Quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getDataFromLocal = () => {
  let shoppingCart = {};
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  }

  return shoppingCart;
};
export { addToCart, getDataFromLocal };
