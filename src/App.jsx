import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";

export default function App() {
  return (
    <>
      <Navbar /> {/* Navbar now provides the ThemeProvider */}
      <Home />
      <About />
    </>
  );
}