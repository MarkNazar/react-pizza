import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //   state.cart = [...state.cart, action.payload];
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      const newCart = state.cart.filter(
        (item) => item.pizzaId !== action.payload,
      );
      state.cart = newCart;
    },
    increaseItemQuantity(state, action) {
      //   state.cart = state.cart.map((item) => {
      //     if (item.pizzaId === action.payload) {
      //       item.quantity += 1;
      //     }
      //   });

      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;

export const getTotalCartQuantity = (store) =>
  store.cart.cart.reduce((sum, item) => {
    return item.quantity + sum;
  }, 0);

export const getCurrentQuantityById = (id) => {
  return (store) =>
    store.cart.cart.find((item) => {
      return item.pizzaId === id;
    })?.quantity ?? 0;
};

export const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((sum, item) => {
    return item.totalPrice + sum;
  }, 0);
