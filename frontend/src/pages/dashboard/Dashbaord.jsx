import React, { useEffect } from "react";
import "./Dashboard.scss";
import { getAllBoats } from "../../api/fetchBoote.js";

const Dashboard = () => {

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllBoats(); // fetchData aufrufen und auf die Daten warten
        console.log(data); // Hier kannst du mit den erhaltenen Daten arbeiten
      } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
      }
    };
    getData(); // getData aufrufen
  }, []);

  return (
    <section className="content_layout">
      <article className="content">
        <div className="icons reserv">Reservierungen
        <div className="statisticNumbers" >1</div>
        </div>
        <div className="icons verfueg">Verfügbare Boote
        <div className="statisticNumbers" >2</div>
        </div>
        <div className="icons gesamt">Boote Gesamt
        <div className="statisticNumbers" >3</div>
        </div>
      </article>
    </section>
)};

export default Dashboard;
