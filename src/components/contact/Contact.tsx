import './Contact.scss';

const Contact = () => {
  const phoneNumber = '+48 797 710 746';
  return (
    <div className="main-container">
      <div className="contact-info">
        <div className="contact-theme-line">
          <div>SKONTAKTUJ SIĘ ZE MNĄ</div>
          <div>I ZRÓB PIERWSZY KROK KU UZDROWIENIU</div>
        </div>
        <div className="contact-text-container">
          <div className="contact-text">
            TEL. <a href={`tel:${phoneNumber}`}> {phoneNumber}</a>
          </div>
          <div className="contact-text">UL. ŻMIGRODZKA 41 - POZNAŃ</div>
          <div className="contact-text">GABINET NR 200 (2 PIĘTRO)</div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Tartak Lorki"
          width="720"
          height="400"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=Tartak%20Lorki+(Tartak%20Lorki)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default Contact;
