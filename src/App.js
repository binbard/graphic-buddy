import logo from './logo.svg';
import './App.css';
import SwiperCore, { Autoplay } from 'swiper';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import NewsSidebar from './components/news-sidebar';
import BannerSlider from './components/banner-slider';

function App() {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <NewsSidebar/>
      <BannerSlider/>
    </div>
  );
}

export default App;
