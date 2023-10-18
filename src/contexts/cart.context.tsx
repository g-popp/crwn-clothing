import { createContext, useEffect, useState } from 'react';

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

const removeItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const increaseItemQuantity = (cartItems, product) => {
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const decreaseItemQuantity = (cartItems, product) => {
  return cartItems.map((cartItem) =>
    cartItem.id === product.id && product.quantity > 1
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeCartItem: () => {},
  increaseItemCount: () => {},
  decreaseItemCount: () => {},
  cartValue: 0,
});

export const CartPovider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);

    const newCartValue = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartValue(newCartValue);
  }, [cartItems, cartValue]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove));
  };

  const increaseItemCount = (product) => {
    setCartItems(increaseItemQuantity(cartItems, product));
  };

  const decreaseItemCount = (product) => {
    setCartItems(decreaseItemQuantity(cartItems, product));
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
    cartValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
