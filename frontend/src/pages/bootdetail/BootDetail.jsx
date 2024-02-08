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
          <h2>Details zum {identifiedBoat?.bootsart} Nr.{identifiedBoat?.seriennummer}</h2>
          <p>Dieses einzigartige Wasserfahrzeug, erbaut im Jahr {identifiedBoat?.baujahr}, verkörpert die perfekte Symbiose aus Eleganz und Kraft.</p>
          <p>Die kunstvolle Verarbeitung aus {identifiedBoat?.material} verleiht diesem Boot nicht nur eine unvergleichliche Stabilität, sondern auch einen zeitlosen Charme. Ob aus robustem Holz, glänzendem Metall oder gar geheimnisvollen Seelen – jedes Boot erzählt seine eigene Geschichte.</p>
          <p>Erleben Sie die Freiheit des Wassers und lassen Sie sich von der einzigartigen Kombination aus modernem Design und traditioneller Handwerkskunst begeistern.</p>
          <BackBtn value= "zurück" url="/boote"/>
          <RemoveBtn value= "löschen" id={identifiedBoat?.id}/>
        </article>
      </section>
    </>
  );
};

export default BootDetail;
