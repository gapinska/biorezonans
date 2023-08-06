import { useCallback, useState } from 'react';
import './App.scss';
import {
  infoContainer,
  infoContainerActive,
  infoContainerWrapper,
  infoContainerWrapperActive,
  nav,
  navActive,
} from './constants/classNames';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import Logo from './img/logotyp.png';
import LogoColor from './img/logotyp-color.png';
import Burger from './img/burger-4.png';
import MenuClose from './img/menu-close.png';
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import Offer from './components/offer/Offer';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import PriceList from './components/priceList/PriceList';
import Footer from './components/footer/Footer';
import { AppContextProvider } from './appContext';

const App: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };
  const navClassName = toggleMenu ? navActive : nav;

  const closeMenu = useCallback(() => {
    setToggleMenu(false);
  }, []);

  return (
    <AppContextProvider>
      <div className="app">
        <Router>
          <div className="main-content">
            <div className="menu-container">
              <div className="menu-wrapper">
                <div className="menu">
                  <nav className={navClassName}>
                    <div className="logo-container">
                      <div className="logo mobile">
                        <img src={Logo} alt="logo" />
                      </div>
                      <div className="logo desktop">
                        <img src={LogoColor} alt="logo" />
                      </div>
                    </div>

                    <div
                      className="burger-nav-wrapper"
                      onClick={handleToggleMenu}
                    >
                      <div className="burger-nav">
                        <img
                          className="menu-open"
                          src={Burger}
                          alt="menu open"
                        />
                        <img
                          className="menu-close"
                          src={MenuClose}
                          alt="menu close"
                        />
                      </div>
                    </div>
                  </nav>
                  <div className="navbar-contact">
                    <span className="brand-name">BioStrefa</span>
                    <span className="contact">519 591 509</span>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleMenu ? infoContainerWrapperActive : infoContainerWrapper
                }
              >
                <ul
                  className={toggleMenu ? infoContainerActive : infoContainer}
                >
                  <li className="list-item">
                    <NavLink to="/" onClick={closeMenu}>
                      Home
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink to="/o-mnie" onClick={closeMenu}>
                      O mnie
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink to="/oferta" onClick={closeMenu}>
                      Oferta
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink to="/cennik" onClick={closeMenu}>
                      Cennik
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink to="/kontakt" onClick={closeMenu}>
                      Kontakt
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ScrollToTop>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/o-mnie" element={<AboutMe />} />
                  <Route path="/oferta" element={<Offer />} />
                  <Route path="/cennik" element={<PriceList />} />
                  <Route path="/kontakt" element={<Contact />} />
                </Routes>
              </ScrollToTop>
            </div>
          </div>
          <Footer />
        </Router>
      </div>
    </AppContextProvider>
  );
};

export default App;
