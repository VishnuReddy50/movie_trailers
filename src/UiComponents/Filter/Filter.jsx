import { useState } from "react";
import "./Filter.css"; // css file for Filter.jsx

// Filter component that returns the language & genre filters dropdown
const Filter = ({ name, list, store, handleRemove, handleAdd }) => {
  // State variable to open & close the dropdown by setting it to true & false
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="Filter">
        {/* Dropdown ation button for filters  */}
        <button type="button" onClick={() => setOpen(!open)}>
          {name} {open ? "▲" : "▼"}
        </button>

        {/* Dropdown list will be opened if the open state is set to true & the opposite if set to false */}
        <div className={open ? "openClass dropdown" : "closeClass dropdown"}>
          {list.map((item) => (
            // Dropdown filter list items
            <div className="items">
              <input
                type="checkbox"
                // Box will be checked based on if the item present in applied filters array
                checked={store.includes(item)}
                value={item}
                name={item}
                // Handler function will be called based on changing the box to remove or add the item to the list
                onChange={store.includes(item) ? handleRemove : handleAdd}
              />
              <label for={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
