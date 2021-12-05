import React, { useState } from "react";
import Chips from "../components/Body/Chips/Chips";
import Movies from "../components/Body/Movies/Movies";
import Header from "../components/Header/Header";
import gFilters from "../Assets/Constants/Genres";
import lFilters from "../Assets/Constants/Languages";
import "./App.css";

const App = () => {
  const [langFilters, setLangFilters] = useState([]);
  const [genFilters, setGenFilters] = useState([]);

  const handleRemove = (e) => {
    if (langFilters.length && langFilters.includes(e.target.value)) {
      setLangFilters(langFilters.filter((chip) => chip !== e.target.value));
    } else if (genFilters.length && genFilters.includes(e.target.value)) {
      setGenFilters(genFilters.filter((chip) => chip !== e.target.value));
    }
  };

  const handleAdd = (e) => {
    if (lFilters.includes(e.target.value)) {
      setLangFilters([...langFilters, e.target.value]);
    } else if (gFilters.includes(e.target.value)) {
      setGenFilters([...genFilters, e.target.value]);
    }
  };

  return (
    <div className="App">
      <Header
        langFilters={langFilters}
        genFilters={genFilters}
        handleRemove={handleRemove}
        handleAdd={handleAdd}
      />
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
