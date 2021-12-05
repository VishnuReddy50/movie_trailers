import { React } from "react";
import "./Chips.css";

export default function Chips({ langFilters, genFilters, handleRemove }) {
  console.log(langFilters);
  return (
    <div className="Chips">
      Applied Filters :
      {langFilters.map((chip) => (
        <div
          className="Chip"
          onClick={(e) => {
            e.target.value = chip;
            handleRemove(e);
          }}
        >
          <h5>{chip}</h5> x
        </div>
      ))}
      {genFilters.map((chip) => (
        <div
          className="Chip"
          onClick={(e) => {
            e.target.value = chip;
            handleRemove(e);
          }}
        >
          <h5>{chip}</h5> x
        </div>
      ))}
    </div>
  );
}
