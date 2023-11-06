import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from "./countrypage.module.scss";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import PropTypes from "prop-types";
import AppContext from "../../context/AppContext";

function CountryPage() {
  const { darkMode } = useContext(AppContext);
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState({});
  const [borderCountries, setBorderCountries] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const decodedCountryName = decodeURIComponent(countryName);
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();

        const filteredData = data.filter(
          (country) =>
            country.name.common.toLowerCase() ===
            decodedCountryName.toLowerCase()
        );
        setCountryData(filteredData[0]);
        const borders = filteredData[0].borders;
        const neighbours = data
          .filter((country) => {
            for (const i of borders) {
              if (i === country.cca3) {
                return country.name.common;
              }
            }
          })
          .map((country) => country.name.common);
        setBorderCountries(neighbours);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [countryName]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${styles.container} ${darkMode && styles.darkMode}`}>
        {Object.keys(countryData).length && (
          <>
            <div className={styles.flagButton}>
              <div className={`${darkMode && styles.darkMode}`}>
                <button
                  onClick={() => navigate(-1)}
                  className={`${styles.button} ${darkMode && styles.darkMode}`}
                >
                  <div>
                    <MdOutlineKeyboardBackspace size="1.25rem" />
                  </div>
                  <div>Back</div>
                </button>
              </div>
              <div className={styles.flag}>
                <img
                  src={countryData.flags.png}
                  alt={countryData.name.common}
                />
              </div>
            </div>
            <div className={styles.content}>
              <h4 className={`${darkMode && styles.darkModeFont}`}>
                {countryData.name.common}
              </h4>
              <div className={styles.countryInfo}>
                <div className={styles.firstPart}>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Official Name:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {countryData.name.official}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Population:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {countryData.population}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Region:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {countryData.region}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Sub region:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {countryData.subregion}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Capital:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {countryData.capital}
                    </span>
                  </div>
                </div>
                <div className={styles.secondPart}>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Top Level Domain:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {countryData.tld[0]}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Currencies:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {
                        Object.values(
                          countryData.currencies[
                            Object.keys(countryData.currencies)[0]
                          ]
                        )[0]
                      }
                    </span>
                  </div>
                  <div>
                    <span
                      className={`${styles.heading} ${
                        darkMode && styles.darkModeFont
                      }`}
                    >
                      Languages:
                    </span>
                    <span className={darkMode && styles.darkModeFont2}>
                      {Object.values(countryData.languages)
                        .toString()
                        .replaceAll(",", ", ")}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.borderCountries}>
                <div
                  className={`${styles.heading} ${
                    darkMode && styles.darkModeFont
                  }`}
                >
                  Border Countries:
                </div>

                <div>
                  {borderCountries ? (
                    borderCountries.map((country) => (
                      <Link
                        to={`/countries/${encodeURIComponent(country)}`}
                        key={country}
                      >
                        <div
                          className={`${styles.borderCountry} ${
                            darkMode && styles.darkMode
                          }`}
                          key={country}
                        >
                          {country}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <span className={`${darkMode && styles.darkModeFont2}`}>
                      No Neighbours.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

CountryPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default CountryPage;
