import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./pages/Main/Main.jsx";
import Achievements from "./pages/Achievements/Achievements.jsx";
import SocialBar from "./components/SocialBar/SocialBar.jsx";
import EmailBar from "./components/EmailBar/EmailBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SocialBar />
        <EmailBar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
