import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;