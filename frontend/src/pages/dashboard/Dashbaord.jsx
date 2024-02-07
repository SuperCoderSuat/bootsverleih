import React, { useEffect } from "react";
import "./Dashboard.scss";
import { getAllBoats } from "../../api/fetchBoote";

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
  <section>
    <div>Reservierungen</div>
    <div>Verfügbare Boote</div>
    <div>Boote Gesamt</div>
  </section>
)};

export default Dashboard;
