import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import { CategroyContainerStyled, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category?.toUpperCase()}</Title>
      <CategroyContainerStyled>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </CategroyContainerStyled>
    </>
  );
};

export default Category;
