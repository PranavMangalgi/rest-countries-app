import { useState, useEffect, useMemo, useContext } from "react";
import Country from "./Country";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import AppContext from "../context/AppContext";

function CountryList() {
  const { darkMode } = useContext(AppContext);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setregion] = useState("");

  const debouncedSetCountry = debounce(async (value) => {
    const url =
      value === ""
        ? `https://restcountries.com/v3.1/all`
        : `https://restcountries.com/v3.1/name/${value}`;
    const response = await fetch(url);
    const data = await response.json();
    setCountries(Array.from(data));
  }, 1000);

  useEffect(() => {
    debouncedSetCountry(country);
  }, [country, debouncedSetCountry]);

  const filteredCountries = useMemo(() => {
    return region.trim() === ""
      ? countries
      : countries.filter((country) => country.region.includes(region));
  }, [region, countries]);

  return (
    <div className="countrylist-container">
      <div className="search-filter">
        <div className={`search-bar ${darkMode && "darkModeElements"}`}>
          <TfiSearch
            className="search-icon"
            style={{ color: darkMode ? "white" : "black" }}
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder=" Search for a country..."
            className={`${darkMode && "darkModeElements darkModeFont"}`}
          />
        </div>
        <div className={`filter-countries ${darkMode && "darkMode"}`}>
          <select onChange={(e) => setregion(e.target.value)}>
            <option value="" disabled hidden selected>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="country-list">
        {filteredCountries.map((country) => {
          return (
            <Link
              to={`/countries/${encodeURIComponent(country.name.common)}`}
              key={country.id}
            >
              <Country country={country} key={country.name.common} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}


export default CountryList;
