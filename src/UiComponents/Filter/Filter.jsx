import { useState } from "react";
import "./Filter.css";

const Filter = ({ name, list, store, handleRemove, handleAdd }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="Filters=">
        <button type="button" onClick={() => setOpen(!open)}>
          {name} {open ? "▲" : "▼"}
        </button>
        <div className={open ? "openClass dropdown" : "closeClass dropdown"}>
          {list.map((item) => (
            <div className="items">
              <input
                type="checkbox"
                checked={store.includes(item)}
                value={item}
                name={item}
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
