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
import CreateEvent from './components/admin/createEvent'
import Admin from './pages/admin'
import GehuIeee from './pages/gehu/ieee';
import GehuAcmw from './pages/gehu/acmw';
import GeuIeee from './pages/geu/ieee';
import GeuAcm from './pages/geu/acm';
import GeuKavyanjali from './pages/geu/kavyanjali';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contribute" element={<Contribute />} />
      <Route path="geu" element={<Geu />} >
        <Route path="ieee" element={<GeuIeee />} />
        <Route path="acm" element={<GeuAcm />} />
        <Route path="kavyanjali" element={<GeuKavyanjali />} />
      </Route>
      <Route path="gehu" element={<Gehu />} >
        <Route path="ieee" element={<GehuIeee />} />
        <Route path="acm-w" element={<GehuAcmw />} />
      </Route>
      <Route path="admin" element={<Alogin />} />
      <Route path="admin/create-event" element={<CreateEvent />} />
    </Routes>
  )
}


function App() {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Sidebar />
        {/* n===1? <Admin/> : <></> */}
      </BrowserRouter>
      <NewsSidebar />
    </div>
  );
}

export default App;
