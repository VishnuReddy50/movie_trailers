const filterMoviesLanguage = (unFilteredMovies, languages) => {
  if (languages.length === 0) return unFilteredMovies;

  const filteredMovies = unFilteredMovies.filter((movie) => {
    let flag = false;
    languages
      .split(" ")
      .forEach(
        (lang) => (flag = lang === movie.EventLanguage || flag ? true : false)
      );

    return flag;
  });

  return filteredMovies;
};

const filterMoviesGenre = (languageFilteredMovies, genres) => {
  if (genres.length === 0) return languageFilteredMovies;

  const filteredMovies = languageFilteredMovies.filter((movie) => {
    let flag = false;
    let movieGenres = movie.EventGenre.split("|");
    let genresArray = genres.split(" ");
    console.log(movieGenres, genresArray);
    console.log();
    movieGenres.forEach((genre) =>
      genresArray.forEach((g) => (flag = g === genre || flag ? true : false))
    );

    return flag;
  });

  return filteredMovies;
};

export { filterMoviesLanguage, filterMoviesGenre };
