import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navigateToCategory = () => {
    navigate(title);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={navigateToCategory}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
