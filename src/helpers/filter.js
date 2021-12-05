export const filterMoviesLanguage = (langFilters, unFilteredMovies) => {
  if (langFilters.length === 0) return unFilteredMovies;

  const filteredMovies = unFilteredMovies.filter((movie) => {
    let flag = false;

    langFilters.forEach(
      (lang) => (flag = lang === movie.EventLanguage || flag ? true : false)
    );

    return flag;
  });

  return filteredMovies;
};

export const filterMoviesGenre = (genFilters, languageFilteredMovies) => {
  if (genFilters.length === 0) return languageFilteredMovies;

  const filteredMovies = languageFilteredMovies.filter((movie) => {
    let flag = false;
    let movieGenres = movie.EventGenre.split("|");

    movieGenres.forEach((genre) =>
      genFilters.forEach((g) => (flag = g === genre || flag ? true : false))
    );

    return flag;
  });

  return filteredMovies;
};
