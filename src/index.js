import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Movies from "./components/Body/Movies/Movies";
import Chips from "./components/Body/Chips/Chips";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <Chips />
    <Movies languages="" genres="Romance Comedy" />
  </StrictMode>,
  rootElement
);
