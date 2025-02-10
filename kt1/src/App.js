import "./styles/app.css";
import React from "react";
import BtnContact from "./components/navbar/ButtonContact";
import logo from "./images/logo.png";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router";
import About from "./components/About";
import Services from "./components/Services";
import MainPage from "./components/MainPage";
import Rent from "./components/Rent";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <header>
            <div class="image-container">
                <img src={logo}></img>
            </div>
            <div class="list-container">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/rent" element={<Rent />}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <BtnContact />
        </header>
    </div>
  );
}

export default App;
