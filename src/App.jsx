import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";
import  Contact  from "./component/Contact";

export default function App() {
  return (
    <>
      <Navbar /> {/* Navbar now provides the ThemeProvider */}
      <Home />
      <About />
      <Experience />
      <Contact/>
    </>
  );
}