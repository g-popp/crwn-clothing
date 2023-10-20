import {
  HomeBackgroundImage,
  HomeBody,
  HomeContainer,
} from './home-item.styles';

const HomeItem = (category) => {
  const { imageUrl, title } = category.category;
  return (
    <HomeContainer>
      <HomeBackgroundImage imageUrl={imageUrl} />
      <HomeBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </HomeBody>
    </HomeContainer>
  );
};

export default HomeItem;
