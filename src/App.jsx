import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import NavbarSection from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import PreLoader from './Components/PageLoader/Preloader';
import assets from './data/assets';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {

  return (
    <>
      <PreLoader />
      <Router>
        <ScrollToTop />
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
      <FloatingWhatsApp
        phoneNumber="+971506581227"
        allowClickAway
        chatMessage="Hi there! How can we assist you today? ☕"
        statusMessage=""
        accountName="Kranti Coffee"
        avatar={assets.greenBGLOGO}
      />
    </>
  )
}

export default App;
