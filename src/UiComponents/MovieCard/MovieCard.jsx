import { useState } from "react";
import heart from "../../Assets/Icons/heart.png"; // Importing heart icon from assets
import playButton from "../../Assets/Icons/playButton.png"; // Importing playButton icon from assets
import Trailer from "../Trailer/Trailer";
import "./MovieCard.css"; // css file for MovieCard.jsx

// MovieCard function returns the movie card with title & rating
const MovieCard = ({ movie }) => {
  const date = movie.ShowDate.split(",");
  // State variable to display the trailer row based on the boolean state
  const [trailer, setTrailer] = useState(false);
  // State variable to change the styling class if the card is clicked & trailer is playing
  const [style, setStyle] = useState("cardImage");

  // Handler function to display & hide the trailer & change the card styling class
  const handleTrailer = () =>{
    setTrailer(!trailer);    
    setStyle(style === "cardImage" ? "cardImage2" :"cardImage");
  }

  return (
    <>
    {/* Trailer component will be displayed only if the trailer state is set is set to true */}
    {trailer && <Trailer movie={movie} handleTrailer={handleTrailer}/>}
    
    {/* Div that shows the movie poster with the related details like rating & release date */}
    <div className="movieCard">
      {/* Movie poster */}
      <img
        src={movie.EventImageUrl}
        alt=""
        className={style}
        loading="lazy"
        width="180"
        height="250"
      />

      {/* Play button to play the movie trailer */}
      <div className="playButton" onClick={handleTrailer}>
        <img src={playButton} alt="playButton"/>
      </div>

      {/* Movie rating & votes count */}
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
     
     {/* Movie release month & year */}
      <div className="dateDiv">
        <div className="date">
          <p style={{marginBottom:"0"}}>{date[0].split(" ").[1]}</p>
          <p style={{marginTop:"0"}}>{date[1]}</p>
        </div>
      </div>

      {/* Movie title */}
      <h3 className="cardTitle">{movie.EventTitle}</h3>
    </div>
    </>
  );
};

export default MovieCard;
