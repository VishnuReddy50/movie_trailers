import React, { useState } from "react";
import Chips from "../components/Body/Chips/Chips";
import Movies from "../components/Body/Movies/Movies";
import Header from "../components/Header/Header";
import "./styles.css";

const App = () => {
  const lFilters = [
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Marathi",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Bengali",
    "Gujarati",
    "Assamese",
    "Sindhi",
    "Rajasthani",
    "French",
    "Bhojpuri",
    "Tulu",
    "Odia",
    "Ladakhi"
  ];
  const gFilters = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Classic",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Musical",
    "Mystery",
    "Period",
    "Psychological",
    "Romance",
    "Sci-Fi",
    "Social",
    "Sports",
    "Suspense",
    "Thriller",
    "War"
  ];
  const [langFilters, setLangFilters] = useState(lFilters);
  const [genFilters, setGenFilters] = useState(gFilters);

  const handleRemove = (e) => {
    if (langFilters.length && langFilters.indexOf(e.target.value) !== -1) {
      setLangFilters(langFilters.filter((chip) => chip !== e.target.value));
    } else if (genFilters.length && genFilters.indexOf(e.target.value) !== -1) {
      setGenFilters(genFilters.filter((chip) => chip !== e.target.value));
    }
  };

  return (
    <div className="App">
      <Header />
      <Chips
        langFilters={langFilters}
        genFilters={genFilters}
        handleRemove={handleRemove}
      />
      <Movies
        langFilters={langFilters}
        genFilters={genFilters}
        handleRemove={handleRemove}
        languages=""
        genres=""
      />
    </div>
  );
};

export default App;
