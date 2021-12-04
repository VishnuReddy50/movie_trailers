import "./styles.css";
import like from "../Icons/like.png";
import heart from "../Icons/heart.png";
import dislike from "../Icons/dislike.png";
import question from "../Icons/question.png";
import calendar from "../Icons/calendar.png";

const Trailer = ({ movie, handleTrailer }) => {
  const url_string = `${movie.TrailerURL}`;
  const url = new URL(url_string);
  const v = url.searchParams.get("v");
  const s = `https://www.youtube.com/embed/${v}?autoplay=1`;
  const genre = movie.EventGenre.split("|");
  const date = movie.ShowDate.split(",");

  return (
    <div className="movie">
      <iframe
        className="movieVideo"
        src={s}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div className="movieDetails">
        <div className="trailerClose">
          <h3>{movie.EventTitle}</h3>
          <h2 onClick={handleTrailer}>X</h2>
        </div>

        <h5>{movie.EventLanguage.toUpperCase()}</h5>

        <div className="tags">
          {genre.map((name) => (
            <p>{name.toUpperCase()}</p>
          ))}
        </div>
        <div className="votes_date">
          <div className="votesDiv">
            <img src={heart} alt="likeCount" />
            <div className="votes">
              <p>{movie.wtsPerc}%</p>
              <p>{movie.wtsCount} votes</p>
            </div>
          </div>
          <div className="relDateDiv">
            <img src={calendar} alt="reldate" />
            <div className="relDate">
              <p>{date[0]}</p>
              <p>{date[1]}</p>
            </div>
          </div>
        </div>
        <div className="icons">
          <div className="iconContent">
            <img src={like} alt="like" />
            WILL WATCH
            <p>({movie.wtsCount})</p>
          </div>
          <div className="iconContent">
            <img src={question} alt="questionMark" />
            MAYBE
            <p>({movie.dwtsCount})</p>
          </div>
          <div className="iconContent">
            <img src={dislike} alt="disLike" />
            WON'T WATCH
            <p>({movie.maybeCount})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
