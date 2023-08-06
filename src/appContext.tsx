import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { biorezonansItemName } from './constants/offerItems';

interface AppContextType {
  activeOfferItem: string;
  setActiveOfferItem: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [activeOfferItem, setActiveOfferItem] = useState(biorezonansItemName);
  const value = {
    activeOfferItem,
    setActiveOfferItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
