import React, { useEffect } from "react";
import "./Dashboard.scss";
import fetchData from "../../api/fetchBoote";

const Dashboard = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(); // fetchData aufrufen und auf die Daten warten
        console.log(data); // Hier kannst du mit den erhaltenen Daten arbeiten
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };

    getData(); // getData aufrufen
  }, []);

  return (
  <div>
    
  </div>
)};

export default Dashboard;
