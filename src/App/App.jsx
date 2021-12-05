import React, { useState } from "react";
import Chips from "../components/Body/Chips/Chips";
import Movies from "../components/Body/Movies/Movies";
import Header from "../components/Header/Header";
import gFilters from "../Assets/Constants/Genres"; // Complete genres list
import lFilters from "../Assets/Constants/Languages"; // Complete languages list
import "./App.css"; // css file for App.jsx

const App = () => {
  // Array states to store applied filters
  const [langFilters, setLangFilters] = useState([]);
  const [genFilters, setGenFilters] = useState([]);

  // Handler function for removing the filter from applied filter array
  const handleRemove = (e) => {
    if (langFilters.length && langFilters.includes(e.target.value)) {
      setLangFilters(langFilters.filter((chip) => chip !== e.target.value));
    } else if (genFilters.length && genFilters.includes(e.target.value)) {
      setGenFilters(genFilters.filter((chip) => chip !== e.target.value));
    }
  };

  // Handler function to add the filter from applied filter array
  const handleAdd = (e) => {
    if (lFilters.includes(e.target.value)) {
      setLangFilters([...langFilters, e.target.value]);
    } else if (gFilters.includes(e.target.value)) {
      setGenFilters([...genFilters, e.target.value]);
    }
  };

  return (
    <div className="App">
      {/* Header component with title, language & genre filters */}
      <Header
        langFilters={langFilters}
        genFilters={genFilters}
        handleRemove={handleRemove}
        handleAdd={handleAdd}
      />

      {/* Chips component to store the applied filter chips */}
      <Chips
        langFilters={langFilters}
        genFilters={genFilters}
        handleRemove={handleRemove}
      />

      {/* Movies component that contains suggested movie cards & their trailers */}
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
