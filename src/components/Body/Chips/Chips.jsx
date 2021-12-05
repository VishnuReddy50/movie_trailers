import { React } from "react";
import "./styles.css";

export default function Chips({ langFilters, genFilters, handleRemove }) {
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
