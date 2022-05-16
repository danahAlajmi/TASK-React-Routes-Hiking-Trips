import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trips-List" element={<TripsList />} />
        <Route path="/trip-Detail" element={<TripDetail />} />
        <Route path="/trip-Detail/:tripSlug" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
