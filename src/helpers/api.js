async function getMovies() {
  const response = await fetch("https://peaceful-forest-62260.herokuapp.com/");
  const fetchedMovies = await response.json();
  return fetchedMovies.moviesData;
}

export { getMovies };
