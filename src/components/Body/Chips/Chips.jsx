import { React } from "react";
import "./Chips.css"; // css file for Chips.jsx

// Chips function returns the list of applied filters chips
export default function Chips({ langFilters, genFilters, handleRemove }) {
  return (
    <div className="Chips">
      Applied Filters :
      {langFilters.map((chip) => (
        // Applied language filters chips
        <div
          className="Chip"
          // Filter remove handler function will be called on clicking the chip
          onClick={(e) => {
            e.target.value = chip;
            handleRemove(e);
          }}
        >
          <h5>{chip}</h5> x
        </div>
      ))}
      {genFilters.map((chip) => (
        // Applied genres filters chips
        <div
          className="Chip"
          // Filter remove handler function will be called on clicking the chip
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
