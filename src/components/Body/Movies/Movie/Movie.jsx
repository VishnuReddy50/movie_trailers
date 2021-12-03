import ReactDOM from "react";

const Movie = ({ name, imageURL, rating }) => {
  return (
    <div className="movie" style={{ display: "flex", flexDirection: "column" }}>
      <img src={imageURL} alt="Movie Thumbnail" />
      <h3>{name}</h3>
      <p>{rating}</p>
    </div>
  );
};
