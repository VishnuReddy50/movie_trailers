import "./styles.css";

const MovieCard = ({ movie }) => {
  const date = movie.ShowDate.split(",");

  return (
    <div className="movieCard">
      <img
        src={movie.EventImageUrl}
        alt="Movie Thumbnail"
        className="cardImage"
      />
      <div className="ratingDiv">
        <div className="rating">
          <p>
            <img
              src="https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1638546472~hmac=3f3882bb9ef740b5844cb1cbd8475d67"
              alt="likeCount"
            />
            {movie.wtsPerc}%
          </p>
          <p>{movie.wtsCount} votes</p>
        </div>
      </div>
      <div className="dateDiv">
        <div className="date">
          <p style={{marginBottom:"0"}}>{date[0].split(" ").[1]}</p>
          <p style={{marginTop:"0"}}>{date[1]}</p>
        </div>
      </div>

      <h3 className="cardTitle">{movie.EventTitle}</h3>
    </div>
  );
};

export default MovieCard;
