import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { removeCartItem, increaseItemCount, decreaseItemCount } =
    useContext(CartContext);

  const removeItemFromCart = () => removeCartItem(cartItem);

  const increaseItemQuantity = () => increaseItemCount(cartItem);

  const decreaseItemQuantity = () => decreaseItemCount(cartItem);

  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItemQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItemQuantity}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>€{price * quantity}</BaseSpan>
      <RemoveButton onClick={removeItemFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
