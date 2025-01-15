import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import NavbarSection from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Loader1 from './Components/PageLoader/Loader1';
import { useState, useEffect } from 'react';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Hide the loader after 3 seconds
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader1 />
      ) : (
        <>
          <Router>
            <NavbarSection />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
            </Routes>
            <Footer />
          </Router>
          <FloatingWhatsApp
            phoneNumber="+91 99401 78297"
            allowClickAway
            chatMessage="Hi there, How can we help you?"
            statusMessage="Chief Rice Officer"
            accountName="Kishore Jeyachandran"
          />
        </>
      )}
    </>
  );
}

export default App;
