import logo from './logo.svg';
import './App.css';
import SwiperCore, { Autoplay } from 'swiper';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import NewsSidebar from './components/news-sidebar';
import Home from './pages/home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './pages/about';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
      <NewsSidebar />
    </div>
  );
}

export default App;
