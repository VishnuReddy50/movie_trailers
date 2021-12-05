// This function filters the unFiltered data according to the applied language filters
export const filterMoviesLanguage = (langFilters, unFilteredMovies) => {
  if (langFilters.length === 0) return unFilteredMovies;

  // Checking every movie language in unFilteredMovies with every language in the
  // applied language filters and add that movie to the filteredMovies list if matched
  const filteredMovies = unFilteredMovies.filter((movie) => {
    let flag = false;

    langFilters.forEach(
      (lang) => (flag = lang === movie.EventLanguage || flag ? true : false)
    );

    return flag;
  });

  // return filtered movies
  return filteredMovies;
};

// This function filters the languageFiltered data according to the applied genre filters
export const filterMoviesGenre = (genFilters, languageFilteredMovies) => {
  if (genFilters.length === 0) return languageFilteredMovies;

  // Checking every movie genre in languageFilteredMovies with every genre in the
  // applied genre filters and add that movie to the filteredMovies list if matched
  const filteredMovies = languageFilteredMovies.filter((movie) => {
    let flag = false;
    let movieGenres = movie.EventGenre.split("|");

    movieGenres.forEach((genre) =>
      genFilters.forEach((g) => (flag = g === genre || flag ? true : false))
    );

    return flag;
  });

  // return filtered movies
  return filteredMovies;
};
