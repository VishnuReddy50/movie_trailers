import { useEffect, useState } from "react";
import { getMovies } from "../../../Helpers/api"; // Importing getMovies function from Helpers module
import MovieCard from "../../../UiComponents/MovieCard/MovieCard"; // Importing MovieCard from its module
import {
  filterMoviesGenre,
  filterMoviesLanguage
} from "../../../Helpers/filter"; // Importing filter functions from Helpers module
import "./Movies.css"; // css file for Movies.jsx

// Movies function displays the movie cards & trailers
const Movies = ({ langFilters, genFilters, filters }) => {
  //State array to store the filterd movies data
  const [movies, setMovies] = useState([]);

  // Asynchronous function to get ths movies data from the api using the imported getMovies function
  async function fetchAllMovies() {
    const fetchedMoviesObject = await getMovies();
    // Converting from object type data to array of objects data
    const fetchedMoviesArray = await Object.values(fetchedMoviesObject);
    return await fetchedMoviesArray;
  }

  // Filter function to filter the data according to the languages & genres
  const filter = async () => {
    const unFilteredMovies = await fetchAllMovies();

    // Calling language filter by passing the unFiltered data & applied language ilters
    const languageFilteredMovies = filterMoviesLanguage(
      langFilters,
      unFilteredMovies
    );

    // Calling genre filter by passing the languageFiltered data & applied genre filters
    const genreFilteredMovies = filterMoviesGenre(
      genFilters,
      languageFilteredMovies
    );

    // Setting genreFiltered movies data in to movies state
    setMovies(genreFilteredMovies);
  };

  useEffect(() => {
    filter();
  }, [langFilters, genFilters, filters]);

  return (
    <div className="Movies">
      {/* Returning MovieCard for each movie from the filtered data */}
      {movies.map((movie, index) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
