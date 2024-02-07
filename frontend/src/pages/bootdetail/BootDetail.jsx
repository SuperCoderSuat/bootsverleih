import { useState, useEffect } from "react";
import "./BootDetail.scss";
import { getAllBoats } from "../../api/fetchBoote.js";
import { useParams } from "react-router-dom";
import BackBtn from "../../components/buttons/backbtn/BackBtn.jsx";
import RemoveBtn from "../../components/buttons/removebtn/RemoveBtn.jsx";

const BootDetail = () => {
  const seriennummer = useParams();
  const [identifiedBoat, setIdentifiedBoat] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllBoats();
        const boat = await data.result.find((boat) => boat.seriennummer === seriennummer.id);
        setIdentifiedBoat(boat);
      } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
      }
    };

    getData();
  }, [seriennummer]);

  return (
    <>
      <section className="content_layout">
        <article className="bootDetail_content">
          <h2>Details Boote</h2>
          <p>Boot Nr.: {identifiedBoat?.seriennummer}</p>
          <p>Baujahr: {identifiedBoat?.baujahr}</p>
          <p>Bootsart: {identifiedBoat?.bootsart}</p>
          <p>Material: {identifiedBoat?.material}</p>
          <BackBtn value= "zurück" url="/boote"/>
          <RemoveBtn value= "löschen" id={identifiedBoat?.id}/>
        </article>
      </section>
    </>
  );
};

export default BootDetail;
