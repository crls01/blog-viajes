import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import Destinos from './pages/Destinos';
import TipsGenerales from './pages/TipsGenerales';

import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import CityPage from './pages/CityPage';
import Favorites from './pages/Favorites';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import TipPage from './pages/TipPage'; 
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {
  return (
    <>
      <Header />
      <Nav />
      <ScrollToTop /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/country/:countryId" element={<CountryPage />} />
          <Route path="/country/:countryId/:cityId" element={<CityPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:tipId" element={<TipPage />} />  
          <Route path="*" element={<NotFound />} />
          <Route path="/tips-generales" element={<TipsGenerales />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
