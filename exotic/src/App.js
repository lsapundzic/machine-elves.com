// React import
import React from "react";

// CSS import
import "./App.css";

// Components import
import Navbar from "./components/navbar.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div>
      <h1>Welcome to The Aberdeen Proving Ground</h1>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
