import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Movies from "./components/Body/Movies/Movies";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <Movies />
  </StrictMode>,
  rootElement
);
