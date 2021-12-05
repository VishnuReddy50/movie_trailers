// Asynchronous function to fetch the movies data from api and return it
async function getMovies() {
  try {
    const response = await fetch(
      "https://peaceful-forest-62260.herokuapp.com/"
    );
    const fetchedMovies = await response.json();
    return fetchedMovies.moviesData;
  } catch (error) {
    console.log(error);
  }
}

export { getMovies };
