import "./NeuesBoot.scss";
import { addNewBoat } from "../../api/fetchBoote";
import { useState } from "react";
import BackBtn from "../../components/buttons/backbtn/BackBtn";

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
      setNotification('Boot erfolgreich angelegt.');
      setBoatDetails({
        baujahr: '',
        seriennummer: '',
        material: '',
        bootsart: '',
      });
    } catch (error) {
      console.error('Fehler beim Anlegen des neuen Bootes:', error);
      setNotification('Fehler beim Anlegen des Boots.');
    }
  };

  return (
    <section className="content_layout">
      <article className="content">
        <h2>Neues Boot anlegen</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_layout">
              <input className="form_input" type="text" name="baujahr" value={boatDetails.baujahr} onChange={handleChange} placeholder="Baujahr" required />
          </div>
          <div className="form_layout">
              <input className="form_input" type="text" name="seriennummer" value={boatDetails.seriennummer} onChange={handleChange} placeholder="Seriennummer" required />
          </div>
          <div className="form_layout">
              <input className="form_input" type="text" name="material" value={boatDetails.material} onChange={handleChange} placeholder="Material" required />
          </div>
          <div className="form_layout">
              <input className="form_input" type="text" name="bootsart" value={boatDetails.bootsart} onChange={handleChange} placeholder="Bootsart" required />
          </div>
          <button className="form_submitbtn" type="submit">Neues Boot anlegen</button>
        </form>
        {notification && <p>{notification}</p>}
        <BackBtn value="zurück" url="/boote"/>
      </article>
    </section>
  );
};

export default NeuesBoot;
