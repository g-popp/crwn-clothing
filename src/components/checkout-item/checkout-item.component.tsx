import { useContext } from 'react';

import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { removeCartItem, increaseItemCount, decreaseItemCount } =
    useContext(CartContext);

  const removeItemFromCart = () => removeCartItem(cartItem);

  const increaseItemQuantity = () => increaseItemCount(cartItem);

  const decreaseItemQuantity = () => decreaseItemCount(cartItem);

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">€{price * quantity}</span>
      <div className="remove-button" onClick={removeItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
