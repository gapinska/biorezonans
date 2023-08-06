import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqData = [
    {
      question: 'Ile trwa wizyta?',
      answer:
        'Czas trwania wizyty uzależniony jest od jej celu. Zwykle sama sesja terapeutyczna zajmuje około 1 godziny. W przypadku przeprowadzenia kompleksowego skanu całego organizmu, wizyta może potrwać nawet około 2 godzin.',
    },
    {
      question: 'Jak przygotować się do wizyty?',
      answer:
        'Na wizytę należy przyjść odpowiednio nawodnionym (zalecam spożycie około 1,5 litra wody). Na 2 godziny przed badaniem nie spożywać posiłków oraz nie pić kawy. W przypadku testów alergicznych należy odstawić leki antyhistaminowe (jeśli nie ma przeciwwskazań zdrowotnych) i wapno na okres przynajmniej 2 tygodni.',
    },
    {
      question: 'Czy biorezonans jest bezpieczny?',
      answer:
        'Terapie biorezansowe są w pełni bezpieczne. W wyniku niszczenia patogenów poprzez częstotliwości, może czasem dojść do reakcji Herxheimera, czyli do nasilenia się objawów z powodu uwolnienia do krwi produktów przemiany materii oraz toksyn z niszczonych patogenów. Charakterystyczne dla intoksykacji są bóle głowy, duszności, bóle w mięśniach i stawach, zawroty głowy, wysypki, słabość lub senność.  Warto stosować się do rad terapeuty, które mogą zapobiec wyżej wymienionym reakcjom.',
    },
    {
      question: 'Jakie są przeciwwskazania?',
      answer:
        'Przeciwwskazaniem do terapii jest posiadanie rozrusznika serca, implantu elektronicznego, bądź ciąża.',
    },
    {
      question: 'Jaka jest skuteczność?',
      answer:
        'Odpowiednio prowadzona terapia prowadzona na właściwie skalibrowanym, nowoczesnym sprzęcie w większości przypadków daje pozytywne, widoczne przez samego pacjenta efekty. Przebieg terapii, w zależności od schorzenia i osoby może wyglądać nieco inaczej. U jednych następuje całkowite pozbycie się alergii/obciążenia już po pierwszych 2-3 wizytach, u innych konieczne jest powtórzenie terapii.',
    },
    {
      question: 'Czy ta metoda jest wiarygodna?',
      answer:
        'Biorezonans jest rozpowszechniony w wielu krajach Europy Zachodniej, jako skuteczna, nieinwazyjna i niedająca skutków ubocznych terapia, niejednokrotnie finansowana z narodowych funduszy zdrowia. Biorezonans jest już również na wyposażeniu niektórych szpitali.',
    },
    {
      question:
        'Czy biorezonans może być stosowany jako metoda wspomagająca leczenie tradycyjne?',
      answer:
        'Biorezonans może być stosowany jako metoda wspomagająca terapie konwencjonalne, pomagając w poprawie reakcji organizmu na leczenie.',
    },
    {
      question: 'Czy biorezonans jest odpowiedni dla dzieci?',
      answer:
        'Przed przystąpieniem do sesji biorezonansu dla dzieci, zawsze zalecamy skonsultowanie się z lekarzem rodzinnym lub pediatrą. Lekarz może ocenić, czy biorezonans jest odpowiedni w kontekście zdrowia i potrzeb Twojego dziecka.',
    },
    {
      question:
        'Jak często powinno się przeprowadzać sesje biorezonansu, aby osiągnąć pożądane efekty?',
      answer:
        'Częstotliwość sesji biorezonansu może się różnić w zależności od kilku czynników, takich jak cel terapii, stan zdrowia, indywidualne potrzeby pacjenta oraz zalecenia specjalisty pracującego z biorezonansem. Częstotliwość może być dostosowana w miarę postępów i odpowiedzi organizmu na terapię. Ważne jest również, aby dawać organizmowi czas na reakcję na zmiany energetyczne wprowadzane przez biorezonans.',
    },
    {
      question:
        'Czy biorezonans może pomóc w redukcji stresu lub poprawie ogólnego samopoczucia?',
      answer:
        'Tak, biorezonans może być używany jako metoda, która ma potencjalnie pomóc w redukcji stresu oraz poprawie ogólnego samopoczucia. Chociaż biorezonans jest często postrzegany jako narzędzie diagnostyczne, istnieje przekonanie, że wpływa on również na energetyczną równowagę organizmu, co może przyczynić się do łagodzenia stresu i poprawy komfortu psychicznego. ',
    },
    {
      question: 'Czy biorezonans może pomóc w poprawie jakości snu?',
      answer:
        'Biorezonans może pomóc w redukcji napięcia i stresu, co może przyczynić się do łatwiejszego zasypiania i lepszego snu.',
    },
    {
      question: 'Dlaczego BioStrefa to wyjątkowy gabinet?',
      answer:
        'Jako jedyny gabinet w Poznaniu oferuję Państwu unikalną diagnozę oraz terapię opartą na dwóch zaawansowanych urządzeniach, które są uważane za jedne z najbardziej precyzyjnych i skutecznych na świecie. Pierwszym z nich jest Bicom renomowanej niemieckiej firmy REGUMED GmbH, zapewniający niezrównaną jakość diagnostyki i terapii. Drugim jest Biophilia Tracker X4, który w połączeniu z Bicom tworzy kompleksowy zestaw narzędzi. To unikalne połączenie obu urządzeń daje ogromne możliwości w identyfikacji źródeł problemów zdrowotnych oraz w ich skutecznym leczeniu. Oferta Bio Strefy to nie tylko medycyna przyszłości, to terapia, która naprawdę działa.',
    },
  ];

  return (
    <div className="faqContainer">
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-content-${index}`}
          >
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
