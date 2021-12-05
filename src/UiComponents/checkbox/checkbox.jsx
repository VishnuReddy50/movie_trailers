import ReactDOM from "react";

const Checkbox = ({ name, list }) => {
  // const [checked, setChecked]=useState(Array(list.length).fill(0));
  return (
    <div>
      <div className="Selector Menu">{name}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> I have a bike</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> I have a car</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> I have a boat</label>
        <br />
      </form>
    </div>
  );
};

export default Checkbox;
