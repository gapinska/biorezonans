import './Offer.scss';
import Button from '@mui/material/Button';
import { OfferMenuItemName } from '../../constants/offerItems';

interface OfferMenuItemProps {
  id: string;
  name: OfferMenuItemName;
  itemClass: string;
  handleClick: (name: OfferMenuItemName) => void;
}

const OfferMenuItem: React.FC<OfferMenuItemProps> = ({
  id,
  name,
  itemClass,
  handleClick,
}) => {
  return (
    <div
      id={id}
      className={`${itemClass} offerMenuItem`}
      onClick={() => handleClick(name)}
    >
      <Button variant="contained" className={`item-btn ${itemClass}`}>
        {name}
      </Button>
    </div>
  );
};

export default OfferMenuItem;
