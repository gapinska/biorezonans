import { useContext, useEffect, useState } from 'react';
import {
  OfferMenuItemName,
  biorezonansItemName,
  offerItemName,
  offerMenuItems,
  questionsItemName,
} from '../../constants/offerItems';
import OfferMenuItem from './OfferMenuItem';
import Biorezonans from './offerVariants/Biorezonans';
import OfferDescription from './offerVariants/OfferDescription';
import FAQ from './offerVariants/FAQ';
import { useAppContext } from '../../appContext';
import { useLocation } from 'react-router-dom';

const Offer: React.FC = () => {
  const [activeItem, setACtiveItem] =
    useState<OfferMenuItemName>(biorezonansItemName);
  const handleClick = (name: OfferMenuItemName) => setACtiveItem(name);
  const { setActiveOfferItem } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (activeItem === biorezonansItemName && location.pathname === '/oferta') {
      setActiveOfferItem(biorezonansItemName);
    }
    if (activeItem !== biorezonansItemName) {
      setActiveOfferItem('');
    }
  }, [activeItem]);

  return (
    <div>
      <div className="offer-container">
        {offerMenuItems.map((offerMenuItem) => {
          const { id, name } = offerMenuItem;
          return (
            <>
              <div>
                <OfferMenuItem
                  id={id}
                  name={name}
                  handleClick={() => handleClick(name)}
                  itemClass={activeItem === name ? 'active' : ''}
                />
              </div>
            </>
          );
        })}
      </div>
      <div>
        {activeItem === biorezonansItemName && <Biorezonans />}
        {activeItem === offerItemName && <OfferDescription />}
        {activeItem === questionsItemName && <FAQ />}
      </div>
    </div>
  );
};

export default Offer;
