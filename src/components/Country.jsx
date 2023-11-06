import PropTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../context/AppContext";
function Country({ country }) {
  const { darkMode } = useContext(AppContext);
  return (
    <div className={`country ${darkMode && "darkModeElements"}`}>
      <img src={country.flags.png} alt="" />

      <div
        className={`country-text ${
          darkMode && "darkModeFont darkModeElements"
        }`}
      >
        <h4>{country.name.common}</h4>
        <div>
          <span>
            <strong>Population: </strong>
          </span>
          {country.population}
        </div>
        <div>
          <span>
            <strong>Region: </strong>
          </span>
          {country.region}
        </div>
        <div>
          <span>
            <strong>Capital: </strong>
          </span>
          {country.capital}
        </div>
      </div>
    </div>
  );
}
Country.propTypes = {
  country: PropTypes.objectOf.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Country;
