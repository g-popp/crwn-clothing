import { useContext } from 'react';
import Button from '../button/button.component';

import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { removeCartItem, increaseItemCount, decreaseItemCount } =
    useContext(CartContext);

  const removeItemFromCart = () => {
    removeCartItem(cartItem);
  };

  const increaseItemQuantity = () => {
    increaseItemCount(cartItem);
  };

  const decreaseItemQuantity = () => {
    decreaseItemCount(cartItem);
  };

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <div>
        <button onClick={decreaseItemQuantity}>Less</button>
        <span>{quantity}</span>
        <button onClick={increaseItemQuantity}>More</button>
      </div>
      <span>€{price * quantity}</span>
      <Button onClick={removeItemFromCart}>X</Button>
    </div>
  );
};

export default CheckoutItem;
