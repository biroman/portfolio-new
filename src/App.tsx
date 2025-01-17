import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function LanguageDebug() {
    const { i18n } = useTranslation();

    return (
      <div className="fixed top-0 right-0 m-4 p-4 bg-white text-black shadow rounded">
        <p>Current language: {i18n.language}</p>
        <p>Resolved language: {i18n.resolvedLanguage}</p>
        <p>Loading: {i18n.isInitialized ? "No" : "Yes"}</p>
        <pre className="text-xs">
          {JSON.stringify(i18n.options.supportedLngs, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row h-screen bg-white relative">
        {LanguageDebug()}
        {/* Mobile menu button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#141414] text-white"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main content */}
        <div id="main" className="flex-1 p-4 md:p-6 md:ml-64 mt-16 md:mt-0">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
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
