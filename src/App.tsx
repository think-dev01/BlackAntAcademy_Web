import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

// Page imports
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { ProgramDetail } from "./pages/ProgramDetail";
import { Schedule } from "./pages/Schedule";
import { Membership } from "./pages/Membership";
import { Gallery } from "./pages/Gallery";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import { Trial } from "./pages/Trial";
import { Contact } from "./pages/Contact";

// Dynamic helper to scroll to top on routing shifts
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-dark-bg text-stone-200 selection:bg-brand-primary selection:text-white">
            {/* Header Navigation */}
            <Navbar />

            {/* Main View Area */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/:slug" element={<ProgramDetail />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/trial" element={<Trial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            {/* Floating WhatsApp Contact Actions */}
            <WhatsAppFloat />

            {/* Footer Area */}
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
