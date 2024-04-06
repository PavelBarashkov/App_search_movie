import React from "react";
import "./App.css";
import { NavBar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app/pages/helpers/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className="main">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
