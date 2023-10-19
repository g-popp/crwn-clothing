import './home-item.styles.scss';

const HomeItem = (category) => {
  const { imageUrl, title } = category.category;
  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="home-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default HomeItem;
