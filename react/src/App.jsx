import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailsPage from "./pages/DetailsPage";
import axios from "axios";
import { useState, useEffect } from 'react';
import MoviesProvider from "./context/moviesContext";

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("http://localhost:3000/movies")
      .then((res) => {
        setItem(res.data.item);
      })
      .catch((err) => {
        console.error("Errore nel recupero dei film:", err);
      });
  }

  return (
    <MoviesProvider value={{ item, setItem }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/movies/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
