import Filter from "../../UiComponents/Filter/Filter"; // Importing Filter component from UiComponents module
import lFilters from "../../Assets/Constants/Languages"; // Importing lFilters array from constants
import gFilters from "../../Assets/Constants/Genres"; // Importing gFilters array from constants
import "./Header.css"; // css file for Header.jsx

// Header function returns the compnent with page title, language & genre filters
const Header = ({ langFilters, genFilters, handleRemove, handleAdd }) => {
  return (
    <div className="Header">
      {/* Page title */}
      <h3>MOVIE TRAILERS</h3>
      <div className="FilterContainer">
        {/* Language filter dropdown */}
        <Filter
          name={"Languages"}
          list={lFilters}
          store={langFilters}
          handleRemove={handleRemove}
          handleAdd={handleAdd}
        />

        {/* Genre filter dropdown */}
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
