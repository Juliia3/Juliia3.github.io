import "./assets/styles/index.scss";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Games from "./components/Games/Games";
import Contact from "./components/Contact/Contact";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Main />
    // </div>
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route index element={<Main />} />

        <Route path="games" element={<Games />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
