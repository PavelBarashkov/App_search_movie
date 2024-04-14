import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./pages/helpers/AppRouter/AppRouter";
import { Container, Spinner } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <Container className="loading-container d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="warning" />
      </Container>
    );
  }

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
