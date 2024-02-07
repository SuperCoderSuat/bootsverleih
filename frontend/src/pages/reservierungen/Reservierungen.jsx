import React, { useState, useEffect } from 'react';
import AddNewBtn from "../../components/buttons/addnewbtn/AddNewBtn";
import { getAllBoats } from "../../api/fetchBoote.js";
import "./Reservierungen.scss";
import UebersichtReservierungenBtn from '../../components/buttons/uebersichtreservierungenbtn/UebersichtReservierungenBtn';

const Reservierungen = () => {
  const [reservierungen, setReservierungen] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllBoats();
        setReservierungen(data.result);
        console.log(data); 
      } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
      }
    };
    getData();
  }, []);
  
  return (
    <>
      <section className="content_layout">
        <article className="boot_content">
          <h2>Übersicht Reservierungen</h2>
          <AddNewBtn/>
          {reservierungen.map((reservierung) => (
            <button key={reservierung.id} onClick={() => handleButtonClick(reservierung)}>
              <UebersichtReservierungenBtn
                buchungsnummer={reservierung.buchungsnummer}
                seriennummer={reservierung.seriennummer}
                // termine={reservierung.termine[0].termine}
              />
            </button>
          ))}
        </article>
      </section>
    </>
  );
};

export default Reservierungen;
