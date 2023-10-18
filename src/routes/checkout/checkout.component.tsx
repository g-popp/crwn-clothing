import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartValue } = useContext(CartContext);

  return (
    <>
      <h2>I am the Checkout</h2>
      <div className="checkout-container">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div>
        <h2>Total Amount:</h2>
        <span>€{cartValue}</span>
      </div>
    </>
  );
};

export default Checkout;
