import { Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie-details/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
