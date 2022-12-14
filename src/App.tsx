import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-violet-600">
      <NavBar />
      <Logo />
      <Info />
      <Footer/>
    </div>
  );
}

export default App;
