import React from "react";
import Chips from "../components/Body/Chips/Chips";
import Movies from "../components/Body/Movies/Movies";
import Header from "../components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Chips />
      <Movies languages="English" genres="Romance Comedy" />
    </div>
  );
};

export default App;
