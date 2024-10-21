import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import NavbarSection from './Components/Navbar/Navbar';

function App() {


  return (
    <>
      <Router>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
