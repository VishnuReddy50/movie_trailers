const filterMoviesLanguage = (unFilteredMovies, languages) => {
  if (languages.length === 0) return unFilteredMovies;

  const filteredMovies = unFilteredMovies.filter((movie) => {
    let flag = false;
    languages
      .split(" ")
      .forEach(
        (lang) => (flag = lang === movie.EventLanguage || flag ? true : false)
      );
    if (flag) console.log(movie.EventTitle);

    return flag;
  });

  return filteredMovies;
};

export { filterMoviesLanguage };
