import './AboutMe.scss';
import AboutMePhoto from '../../img/about-me.jpg';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-section">
      <div className="photo-section">
        <div className="photo">
          <img className="about-me-photo" src={AboutMePhoto} alt="harmony" />
          <div className="tile-info">
            <div className="name">mgr DANUTA SZUMIŃSKA</div>
            <div>
              Terapeutka BICOM oraz Biophilia Tracker
              <br />
              nauczycielka wychowania fizycznego
              <br />
              trenerka personalna, instruktorka fitness
            </div>
          </div>
        </div>
        <div className="text-section">
          <div className="name">KILKA SŁÓW O MNIE</div>
          <div>
            <div className="text">
              Jestem specjalistką zajmująca się diagnozą oraz terapią za pomocą
              zaawansowanych urządzeń biorezonansu. Moja pasja do medycyny
              niekonwencjonalnej, zdrowego stylu życia i aktywności fizycznej
              skłoniła mnie do pogłębiania wiedzy przez studia oraz liczne
              kursy, dzięki którym zdobyłam umiejętności patrzenia na pacjenta w
              sposób holistyczny. Uwzględniam wszystkie aspekty życia, które
              mogą wpływać na zdrowie i dobre samopoczucie.
            </div>
            <div className="text">
              Poprawę zdrowia moich pacjentów daje mi niesamowitą satysfakcję i
              utwierdza w przekonaniu, że nasz organizm ma ogromne zdolności do
              samouzdrawiania, jedynym czego potrzebuje jest impuls i
              zainicjowanie odpowiednich warunków ku temu.
            </div>
            <div className="text">
              Celem mojej pracy jest przywrócenie organizmowi odpowiednich
              warunków do regeneracji i poprawnego funkcjonowania. Jestem
              ukierunkowana na postawienie właściwej diagnozy, dotarcie do
              źródła problemu i wyeliminowanie go. Podchodzę indywidualnie do
              każdego pacjenta, co prowadzi do spersonalizowanej i skutecznej
              terapii.
            </div>
            <div className="text">
              Zapraszam Cię do mojego gabinetu biorezonansu, gdzie wspólnie
              zadbamy o Twoje zdrowie i harmonię.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
