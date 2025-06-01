import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import CityPage from './pages/CityPage';
import Favorites from './pages/Favorites';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <ScrollToTop /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryId" element={<CountryPage />} />
          <Route path="/country/:countryId/:cityId" element={<CityPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
