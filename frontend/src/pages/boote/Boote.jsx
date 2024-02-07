import React, { useState, useEffect } from 'react';
import AddNewBtn from "../../components/buttons/addnewbtn/AddNewBtn";
import UebersichtBtn from "../../components/buttons/uebersichtbtn/UebersichtBtn";
import { getAllBoats } from "../../api/fetchBoote.js";
import "./Boote.scss";

const Boote = () => {
  const [boote, setBoote] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllBoats();
        setBoote(data.result);
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
          <h2>Übersicht Boote</h2>
          <AddNewBtn/>
          {boote.map((boot) => (
            <button key={boot.id} onClick={() => handleButtonClick(boot)}>
              <UebersichtBtn
                baujahr={boot.baujahr}
                seriennummer={boot.seriennummer}
                bootsart={boot.bootsart}
               />
            </button>
          ))}
        </article>
      </section>
    </>
  );
};

export default Boote;
