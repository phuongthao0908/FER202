export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const updateCart = (product) => ({
  type: 'UPDATE_CART',
  payload: product,
});

export const deleteFromCart = (id) => ({
  type: 'DELETE_FROM_CART',
  payload: id,
});
