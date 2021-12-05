import like from "../../Assets/Icons/like.png";
import heart from "../../Assets/Icons/heart.png";
import dislike from "../../Assets/Icons/dislike.png";
import question from "../../Assets/Icons/question.png";
import calendar from "../../Assets/Icons/calendar.png";
import "./Trailer.css"; // css file for Trailer.jsx

// Trailer returns the trailer video with some other info like genres & language
const Trailer = ({ movie, handleTrailer }) => {
  const url_string = `${movie.TrailerURL}`; // Url to movie trailer on youtube
  const url = new URL(url_string);
  const v = url.searchParams.get("v");
  const s = `https://www.youtube.com/embed/${v}?autoplay=1`;
  const genre = movie.EventGenre.split("|"); // Storing the movie genres list
  const date = movie.ShowDate.split(","); // Storing the movie show date

  return (
    <div className="movie">
      {/* Youtube trailer video frame */}
      <iframe
        className="movieVideo"
        src={s}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      {/* Div to show the extra info on the movie */}
      <div className="movieDetails">
        {/* Movie title */}
        <div className="trailerClose">
          <h3>{movie.EventTitle}</h3>
          <h2 onClick={handleTrailer}>X</h2>
        </div>

        {/* Movie language */}
        <h5>{movie.EventLanguage.toUpperCase()}</h5>

        {/* Movie genres */}
        <div className="tags">
          {genre.map((name) => (
            <p>{name.toUpperCase()}</p>
          ))}
        </div>

        {/* Like percentage */}
        <div className="votes_date">
          <div className="votesDiv">
            <img src={heart} alt="likeCount" />
            <div className="votes">
              <p>{movie.wtsPerc}%</p>
              <p>{movie.wtsCount} votes</p>
            </div>
          </div>

          {/* Movie show date */}
          <div className="relDateDiv">
            <img src={calendar} alt="reldate" />
            <div className="relDate">
              <p>{date[0]}</p>
              <p>{date[1]}</p>
            </div>
          </div>
        </div>

        {/* Movie reviews from viewers */}
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
