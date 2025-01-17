import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) && // Click is outside sidebar
        buttonRef.current &&
        !buttonRef.current.contains(target) // Click is outside button
      ) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row h-screen bg-white relative">
        {/* Mobile menu button */}
        <button
          id="burger"
          ref={buttonRef}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`${
            isSidebarOpen
              ? "md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-white"
              : "md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#141414] text-white"
          } `}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <div ref={sidebarRef}>
          <SideBar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

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
