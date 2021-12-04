import heart from "../../Icons/heart.png";
import playButton from "../../Icons/playButton.png";
import "./styles.css";

const MovieCard = ({ movie }) => {
  const date = movie.ShowDate.split(",");

  return (
    <div className="movieCard">
      <img
        src={movie.EventImageUrl}
        alt=""
        className="cardImage"
        loading="lazy"
      />
       <div className="playButton">
        <img src={playButton} alt="playButton"/>
        </div>
      <div className="ratingDiv">
        <div className="rating">
          <p>
            <img
              src={heart}
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
