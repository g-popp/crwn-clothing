import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_STYLES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductCardFooter,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = (product) => {
  const { id, imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer key={id}>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>{price}€</Price>
      </ProductCardFooter>
      <Button buttonType={BUTTON_STYLES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
