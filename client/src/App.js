import './App.css';
import Catalog from './pages/catalog';
import Footer from './components/footer';
import Navbar from './components/navbar';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fontsource/barlow"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Cart from './pages/cart';
import Admin from './pages/admin';
import GlobalState from './store/globalState';
// import { Router } from 'react-router-dom';


function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
