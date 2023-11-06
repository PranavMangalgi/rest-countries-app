import { useState, useEffect } from "react";
import "./index.css";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import CountryPage from "./components/CountryPage/CountryPage";
import AppContext from "./context/AppContext";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" 
  );
  useEffect(() => {
    document.body.classList.toggle("darkMode", darkMode);

    const headerElement = document.querySelector(".header h3");
    if (headerElement) {
      headerElement.classList.toggle("darkModeFont", darkMode);
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" replace />} />
        <Route
          path="/countries"
          element={
            <>
              <Header />
              <CountryList />
            </>
          }
        />
        <Route
          path="/countries/:countryName"
          element={
            <>
              <Header />
              <CountryPage />
            </>
          }
        />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
