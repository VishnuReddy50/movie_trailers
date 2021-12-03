import ReactDOM, { useEffect, useState } from "react";
import { getMovies } from "../../../helpers/api";
import { filterMoviesLanguage } from "../../../helpers/filter";
import MovieCard from "../MovieCard/MovieCard";
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
    setMovies(filterMoviesLanguage(unFilteredMovies, languages));
  };

  useEffect(() => {
    filter(languages, genres);
  }, [languages, genres]);

  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard
          name={movie.EventTitle}
          imageURL={movie.EventImageUrl}
          rating={movie.EventGenre}
          key={index}
        />
      ))}
    </div>
  );
};

export default Movies;
