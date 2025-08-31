import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Contact from "./Pages/Contact/Contact";
import Aboutus from "./Pages/AboutUS/Aboutus";
import Iconfile from "./Iconfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/icon" element={<Iconfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
