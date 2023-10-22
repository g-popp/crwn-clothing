// @ts-nocheck
import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItems = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, productToRemove) =>
  cartItems.filter((item) => item.id !== productToRemove.id);

const increaseItemQuantity = (cartItems, product) =>
  cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

const decreaseItemQuantity = (cartItems, product) =>
  cartItems.map((cartItem) =>
    cartItem.id === product.id && product.quantity > 1
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

export const CartContext = createContext({
  cartCount: 0,
  cartItems: [],
  isCartOpen: false,
  cartTotal: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeCartItem: () => {},
  increaseItemCount: () => {},
  decreaseItemCount: () => {},
});

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'ADD_ITEM_TO_CART',
  TOGGLE_CART_IS_OPEN: 'TOGGLE_CART_IS_OPEN',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const CartPovider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_IS_OPEN, bool));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItems(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeCartItem = (productToRemove) => {
    const newCartItems = removeItemFromCart(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const increaseItemCount = (product) => {
    const newCartItems = increaseItemQuantity(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const decreaseItemCount = (product) => {
    const newCartItem = decreaseItemQuantity(cartItems, product);
    updateCartItemsReducer(newCartItem);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeCartItem,
    increaseItemCount,
    decreaseItemCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
