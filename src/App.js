import './App.css';
import Header from './components/header';
import About from './components/about';
import Collab from './components/collab';
import Service from './components/service';
import Footer from './components/footer';
import Pop from './components/pop';
import FloatingBannerA from './components/floatingBanner';
import FloatingBannerB from './components/floatingBannerB';

function App() {
  return (
    <>
      <Header />
      <About />
      <FloatingBannerA />
      <Service />
      <FloatingBannerB />
      <Collab />
      <Footer />
    </>
  );
}

export default App;