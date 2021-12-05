import { useEffect, useState } from "react";
import { getMovies } from "../../../helpers/api";
import MovieCard from "../../../UiComponents/MovieCard/MovieCard";
import {
  filterMoviesGenre,
  filterMoviesLanguage
} from "../../../helpers/filter";
import "./Movies.css";

const Movies = ({ langFilters, genFilters, filters }) => {
  const [movies, setMovies] = useState([]);

  const fetchAllMovies = async () => {
    const fetchedMoviesObject = await getMovies();
    const fetchedMoviesArray = await Object.values(fetchedMoviesObject);
    return await fetchedMoviesArray;
  };

  const filter = async () => {
    const unFilteredMovies = await fetchAllMovies();

    const languageFilteredMovies = filterMoviesLanguage(
      langFilters,
      unFilteredMovies
    );
    const genreFilteredMovies = filterMoviesGenre(
      genFilters,
      languageFilteredMovies
    );

    setMovies(genreFilteredMovies);
  };

  useEffect(() => {
    filter();
  }, [langFilters, genFilters, filters]);

  return (
    <div className="Movies">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
