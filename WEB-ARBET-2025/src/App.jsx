import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import komponentov
import Navigation from "./components/Navigation";


// import stránok
import Home from "./pages/Home";
import Buildings from "./pages/Buildings";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

// import LanguageProvider pre správu jazykov
import { LanguageProvider } from "./LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navigation /> {/* Navigácia, ktorá používa jazykový kontext */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
