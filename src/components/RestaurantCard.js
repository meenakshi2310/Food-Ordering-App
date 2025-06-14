const RestaurantCard = (props) => {
  const { resData } = props;
  const { img, name, cuisine, avgRating, deliveryTime, costForTwo } =
    resData?.data;
  return (
    <div className="res-card">
      <img className="res-logo" src={img} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating} Star</h4>
      <h4>${costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;