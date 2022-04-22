import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import NewsSidebar from './components/news-sidebar';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Geu from './pages/geu/geu';
import Gehu from './pages/gehu/gehu';
import Contribute from './pages/contribute';
import Alogin from './pages/admin';
import SwiperCore, { Autoplay } from 'swiper';
import RecordList from './components/admin/recordList';
import Edit from './components/admin/edit';
import Create from './components/admin/create';

function Router(){
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="geu" element={<Geu />} />
          <Route path="gehu" element={<Gehu />} />
          <Route path="admin" element={<Alogin />} />

          <Route exact path="/record" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
  )
}

function App() {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router/>
        <Sidebar />
      </BrowserRouter>
      <NewsSidebar />
    </div>
  );
}

export default App;
