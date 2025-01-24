import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/aboutus" Component={AboutUsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
