import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Affiliate from "./pages/affiliates";
import BookQuiz from "./pages/bookq";
import ButterFlyQuizz from "./pages/butterflyq";
import Contact from "./pages/contact";
import FAQ from "./pages/faqs";
import MusicQuiz from "./pages/musicq";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import LoginPage from "./pages/signin";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/affiliate" element={<Affiliate/>} />
        <Route path="/bookq" element={<BookQuiz/>} />
        <Route path="/butterflyq" element={<ButterFlyQuizz />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faqs" element={<FAQ/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/musicq" element={<MusicQuiz/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;