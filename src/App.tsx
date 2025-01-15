import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-white">
        {/* Sidebar */}
        <SideBar />

        {/* Main content */}
        <div id="main" className="flex-1 p-6 ml-64">
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
