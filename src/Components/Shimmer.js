export const Shimmer = () => {
  return (
    <div className="shimmer-menu">
      {Array(20)
        .fill("")
        .map((e,index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="shimmer-menu">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};