import { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
function Header() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className={`header ${darkMode && "darkModeElements"}`}>
      <h3
        onClick={() => navigate("/countries")}
        style={{color:darkMode?'white':'black'}}
      >
        Where in the World?
      </h3>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className={`${darkMode && "darkModeFont"}`}
      >
        {darkMode ? <BsSun size="1rem" /> : <BsMoon size="1rem" />}{" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
