import ReactDOM, { useEffect, useState } from "react";
import { getMovies } from "../../../helpers/api";
import MovieCard from "../MovieCard/MovieCard";
const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const fetchedMoviesObject = await getMovies();
    const fetchedMoviesArray = await Object.values(fetchedMoviesObject);
    setMovies(fetchedMoviesArray);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          name={movie.EventTitle}
          imageURL={movie.EventImageUrl}
          rating={movie.EventGenre}
        />
      ))}
    </div>
  );
};

export default Movies;
