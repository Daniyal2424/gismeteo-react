import React from "react";
import WeatherApi from "./Components/WeatherApi";
import WeatherInMap from "./Components/WeatherInMap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardsNews from "./Components/CardsNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/almaty"
            element={<WeatherApi id={1526384} title={"Almaty"} />}
          />
          <Route
            path="/astana"
            element={<WeatherApi id={1526273} title={"Astana"} />}
          />
          <Route
            path="/karagandy"
            element={<WeatherApi id={609655} title={"Karagandy"} />}
          />
          <Route
            path="/shymkent"
            element={<WeatherApi id={1524801} title={"Shymkent"} />}
          />
          <Route
            path="/semey"
            element={<WeatherApi id={1518980} title={"Semey"} />}
          />
        </Routes>
        <CardsNews />
        <WeatherInMap />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
