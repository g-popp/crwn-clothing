import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = product => {
    const { id, imageUrl, name, price } = product;

    return (
        <div key={id} className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}€</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    );
};

export default ProductCard;
