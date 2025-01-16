import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import NavbarSection from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import PreLoader from './Components/PageLoader/Preloader';

function App() {

  return (
    <>
      <PreLoader />
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
  )
}

export default App;
