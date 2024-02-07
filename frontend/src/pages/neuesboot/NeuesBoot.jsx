import "./NeuesBoot.scss";
import { addNewBoat } from "../../api/fetchBoote";
import { useState } from "react";

const NeuesBoot = () => {
  const [boatDetails, setBoatDetails] = useState({
    baujahr: '',
    seriennummer: '',
    material: '',
    bootsart: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatDetails({ ...boatDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addNewBoat(boatDetails);
      console.log('Neues Boot erfolgreich erstellt:', response);
      setNotification('Boot erfolgreich angelegt.'); // Benachrichtigung setzen
      setBoatDetails({
        baujahr: '',
        seriennummer: '',
        material: '',
        bootsart: '',
      }); // Eingabefelder leeren
    } catch (error) {
      console.error('Fehler beim Anlegen des neuen Bootes:', error);
      setNotification('Fehler beim Anlegen des Boots.'); // Benachrichtigung setzen
    }
  };

  return (
    <section className="content_layout">
      <article className="content">
        <h2>Neues Boot anlegen</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_layout">
              <input className="form_input" type="text" name="baujahr" value={boatDetails.baujahr} onChange={handleChange} placeholder="Baujahr"/>
          </div>
          <div className="form_layout">
              <input className="form_input" type="text" name="seriennummer" value={boatDetails.seriennummer} onChange={handleChange} placeholder="Seriennummer"/>
          </div>
          <div className="form_layout">
              <input className="form_input" type="text" name="material" value={boatDetails.material} onChange={handleChange} placeholder="Material"/>
          </div>
          <div className="form_layout">
              <input className="form_input" type="text" name="bootsart" value={boatDetails.bootsart} onChange={handleChange} placeholder="Bootsart"/>
          </div>
          <button className="form_submitbtn" type="submit">Neues Boot anlegen</button>
        </form>
        {notification && <p>{notification}</p>} {/* Benachrichtigung anzeigen */}
      </article>
    </section>
  );
};

export default NeuesBoot;
