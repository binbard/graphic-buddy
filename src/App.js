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
import CreateEvent from './components/admin/createEvent'
import Admin from './pages/admin'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contribute" element={<Contribute />} />
      <Route path="geu" element={<Geu />} />
      <Route path="gehu" element={<Gehu />} />
      <Route path="admin" element={<Alogin />} />
      <Route path="admin/create-event" element={<CreateEvent />} />

      <Route exact path="/record" element={<RecordList />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  )
}


function App() {
  // var n=0;
  // var pn = window.location.pathname == "/admin";
  // if (pn) n=1
  // else n=0;
  var n=0;

  

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
