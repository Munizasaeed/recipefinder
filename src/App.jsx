import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Details from "./components/Details";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recipe/:id" element={<Details />} />
    </Routes>
  );
}

export default App;