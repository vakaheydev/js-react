import "./styles/app.css";
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Services from "./components/Services";
import Rent from "./components/Rent";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/rent" element={<Rent />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
