import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import NewsSidebar from './components/news-sidebar';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Geu from './pages/geu';
import GehuDdn from './pages/gehu-ddn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="geu" element={<Geu />} />
          <Route path="gehu" element={<GehuDdn />} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
      <NewsSidebar />
    </div>
  );
}

export default App;
