import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import SocialLinks from "./Components/SocialLinks";
import Profiles from "./Components/Profiles";
function App() {
  return (
    <Router>
      <Header />
      <SocialLinks/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
      <Profiles/>
    </Router>
  );
}
export default App;
