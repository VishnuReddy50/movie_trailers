import ReactDOM, { useEffect, useState } from "react";
import { getMovies } from "../../../helpers/api";
import MovieCard from "../../../UiComponents/MovieCard/MovieCard";
import "./styles.css";
import {
  filterMoviesGenre,
  filterMoviesLanguage
} from "../../../helpers/filter";
const Movies = ({ languages, genres }) => {
  const [movies, setMovies] = useState([]);

  const fetchAllMovies = async () => {
    const fetchedMoviesObject = await getMovies();
    const fetchedMoviesArray = await Object.values(fetchedMoviesObject);
    return await fetchedMoviesArray;
  };

  const filter = async (languages, genres) => {
    console.log(languages);
    const unFilteredMovies = await fetchAllMovies();
    const languageFilteredMovies = filterMoviesLanguage(
      unFilteredMovies,
      languages
    );
    const genreFilteredMovies = filterMoviesGenre(
      languageFilteredMovies,
      genres
    );

    console.log(genreFilteredMovies);
    setMovies(genreFilteredMovies);
  };

  useEffect(() => {
    filter(languages, genres);
  }, [languages, genres]);

  return (
    <div className="Movies">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
