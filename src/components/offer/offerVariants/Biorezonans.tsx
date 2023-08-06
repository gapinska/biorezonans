import BiorezonansPhoto from '../../../img/biorezonans.jpg';

const Biorezonans = () => {
  return (
    <>
      <div className="offer-description biorezonans">
        <div className="offer-description-text">
          Biorezonans już od wielu lat jest wykorzystywany do kompleksowej
          diagnostyki organizmu, usuwania obciążeń ciała (w tym metali ciężkich
          oraz różnego rodzaju patogenów takich jak grzyby, bakterie, wirusy czy
          pasożyty) oraz wspomagania leczenia chorób przewlekłych. Aby
          zrozumieć, w jaki sposób działa urządzenie, należy mieć świadomość, że
          wszystko, co nas otacza jest energią. Wszystkie cząsteczki materii,
          również komórki w ludzkim ciele, pasożyty, wirusy, bakterie, toksyny,
          pyłki emitują fale elektromagnetyczne. Zależnie od rodzaju cząsteczki,
          materie posiadają indywidualną długość lub częstotliwość tych właśnie
          fal. Nazywa się to wzorem częstotliwości i jest on odczytywany przez
          narzędzia służące do biorezonansu. Następnie urządzenia podczas
          terapii wzmacniają pożądane częstotliwości oraz neutralizują te, które
          są chorobotwórcze. Celem terapii jest przywrócenie w organizmie
          prawidłowych drgań na poziomie komórkowym i komunikacji pomiędzy
          komórkami, a wytłumienie patologicznych, tak aby przywrócić prawidłową
          pracę danego narządu, układu lub całego organizmu. Terapia
          częstotliwościami pozwala na nieinwazyjne, komfortowe i nieobarczone
          skutkami ubocznymi zwalczanie patogenów takich jak pasożyty, bakterie,
          wirusy czy grzyby chorobotwórcze, jak również wspomaganie pracy
          poszczególnych narządów, regulację procesów zachodzących w organizmie,
          wspomaganie procesów naprawczych, detoksykacyjnych, wygaszanie stanów
          zapalnych czy też wygaszanie dolegliwości bólowych. Gdy medycyna
          konwencjonalna pozostaje bezradna lub niesie skutki uboczne, warto
          spróbować terapii biorezonansu, która w wielu przypadkach w szybki
          sposób gwarantuję poprawę jakości życia nie powodując przy tym żadnych
          skutków ubocznych.
        </div>
        <div className="biorezonans-photo">
          <img className="home-photo" src={BiorezonansPhoto} alt="harmony" />
        </div>
      </div>
    </>
  );
};

export default Biorezonans;
