import { React, useState } from "react";
import "./styles.css";

export default function Chips() {
  let filters = [
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
  const [chips, setChips] = useState(filters);
  const handle = (e) => {
    console.log(e.target.value);
    setChips(chips.filter((chip) => chip !== e.target.value));
  };
  return (
    <div className="Chips">
      Applied Filters :
      {chips.map((chip) => (
        <div
          className="Chip"
          onClick={(e) => {
            // setChips(chips.filter((ch) => ch !== chip));
            e.target.value = chip;
            handle(e);
          }}
        >
          <h5>{chip}</h5> x
        </div>
      ))}
    </div>
  );
}
