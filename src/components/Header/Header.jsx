import Filter from "../../UiComponents/Filter/Filter";
import "./Header.css";
import lFilters from "../../Assets/Constants/Languages";
import gFilters from "../../Assets/Constants/Genres";

const Header = ({ langFilters, genFilters, handleRemove, handleAdd }) => {
  return (
    <div className="Header">
      <h3>MOVIE TRAILERS</h3>
      <div className="FilterContainer">
        <Filter
          name={"Languages"}
          list={lFilters}
          store={langFilters}
          handleRemove={handleRemove}
          handleAdd={handleAdd}
        />
        <Filter
          name={"Genres"}
          list={gFilters}
          store={genFilters}
          handleRemove={handleRemove}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
};

export default Header;
