import './Footer.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sticky } from '../../constants/classNames';
import { useAppContext } from '../../appContext';
import { biorezonansItemName, offerItemName } from '../../constants/offerItems';

const Footer = () => {
  const [isSticky, setIsSticky] = useState(true);
  const location = useLocation();
  const footerClassName = isSticky ? sticky : '';
  const { activeOfferItem } = useAppContext();

  useEffect(() => {
    setIsSticky(
      (location.pathname !== '/' && location.pathname !== '/oferta') ||
        (location.pathname === '/oferta' &&
          activeOfferItem === biorezonansItemName)
    );
  }, [location.pathname, activeOfferItem]);
  return (
    <div className={`footer ${footerClassName}`}>
      <div className="footer-header">ODKRYJ MOC BIOREZONANSU </div>
      <div>TEL. 797 710 746</div>
      <div>UL. ŻMIGRODZKA 41 - POZNAŃ</div>
      <div>GABINET NR 200 (2 PIĘTRO)</div>
    </div>
  );
};

export default Footer;
