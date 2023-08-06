import './Home.scss';
import HomePhoto from '../../img/home-photo.jpg';
import HomePhoto2 from '../../img/home-photo-2.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="section-1">
        <img className="home-photo" src={HomePhoto} alt="harmony" />
        <div className="theme-line-container text-container">
          <div className="theme-line">
            <div>ENERGIA I ZDROWIE W HARMONII </div>
            <div>Z BIOREZONANSEM</div>
          </div>
          <div className="theme-line-text theme-line-content">
            Terapia biorezonansem może być wykorzystywana w wielu obszarach
            zdrowia, od wsparcia w leczeniu dolegliwości fizycznych, po redukcję
            stresu i poprawę samopoczucia. Wspiera organizm w eliminacji toksyn,
            redukcji stanów zapalnych i przywróceniu naturalnej równowagi
            energetycznej.
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="text-container">
          <div className="theme-line-title">DIAGNOSTYKA</div>
          <div className="theme-line-content content">
            Diagnostyka biorezonansem to innowacyjna metoda badania, która
            pozwala na analizę energii i informacji obecnych w organizmie.
            Pozwala wykryć ewentualne zaburzenia energetyczne czy
            nieprawidłowości w funkcjonowaniu różnych narządów i układów.
          </div>
          <div className="theme-line-title">TERAPIA</div>
          <div className="theme-line-content content">
            Terapia skupia się na harmonizowaniu i wzmocnieniu energetycznego
            pola ciała. Poprzez analizę i optymalizację rezonansu
            elektromagnetycznego, terapia biorezonansem może pomóc w wykrywaniu
            i redukcji nieprawidłowości energetycznych, które mogą przyczyniać
            się do problemów zdrowotnych.
          </div>
          <div className="theme-line-title">
            KOMPLEKSOWY PROGRAM <br />
            ZRÓWNOWAŻONEGO ODCHUDZANIA
          </div>

          <div className="theme-line-content content">
            Programy odchudzania z indywidualnym podejściem, który łączy terapię
            biorezonansem z planem żywieniowym i aktywnością fizyczną.
          </div>
        </div>
        <img className="home-photo-2" src={HomePhoto2} alt="harmony" />
      </div>
    </>
  );
};

export default Home;
