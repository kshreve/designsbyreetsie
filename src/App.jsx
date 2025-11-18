import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Awards } from './pages/Awards';
import { GourdArtSold } from './pages/GourdArtSold';
import { Contact } from './pages/Contact';

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleMenuToggle = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <Router>
      <div className="relative w-full min-h-screen bg-page-bg flex flex-col">
        <Header onMenuToggle={handleMenuToggle} />
        <Nav isOpen={showNav} onLinkClick={handleLinkClick} />
        <div className="text-[#252525] font-sans text-base overflow-y-visible flex-grow flex">
          <div className="container bg-white w-full mx-auto px-5 py-2.5 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/sold" element={<GourdArtSold />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        <Footer />
        <div className="bg-gray-950 text-gray-400 py-4 md:pb-4 ">
          <div className="w-full  sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <p className="text-[8px]">
              Website designed & developed by{' '}
              <a
                href="https://kshreve.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold  text-white hover:text-blue-400 transition-colors underline decoration-blue-400/50 hover:decoration-blue-400"
              >
                Kevin Shreve
              </a>
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
