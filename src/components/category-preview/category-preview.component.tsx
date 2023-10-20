import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewView,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navigateToCategory = () => {
    navigate(title);
  };

  return (
    <CategoryPreviewContainer>
      <h2>
        <span onClick={navigateToCategory}>{title.toUpperCase()}</span>
      </h2>
      <CategoryPreviewView>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </CategoryPreviewView>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
