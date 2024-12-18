import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import komponentov
import Navigation from "./components/Navigation";

// import stránok
import Home from "./pages/Home";
import Buildings from "./pages/Buildings";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Tu sa renderuje navigácia */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
