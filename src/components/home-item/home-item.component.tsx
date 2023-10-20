// @ts-nocheck
import { useNavigate } from 'react-router-dom';
import {
  HomeBackgroundImage,
  HomeBody,
  HomeContainer,
} from './home-item.styles';

const HomeItem = (category) => {
  const { imageUrl, title, route } = category.category;
  const navigate = useNavigate();

  const navigateToRoute = () => navigate(route);

  return (
    <HomeContainer onClick={navigateToRoute}>
      <HomeBackgroundImage imageUrl={imageUrl} />
      <HomeBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </HomeBody>
    </HomeContainer>
  );
};

export default HomeItem;
