import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Art from "./page/Art";
import "./Index.css";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <div>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/art" element={<Art />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
