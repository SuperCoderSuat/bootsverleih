import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { getAllBoats } from "../../api/fetchBoote.js";

const Dashboard = () => {

  const [fetchData, setFetchData] = useState([])
  const [numberReservierung, setNumberReservierung] = useState("")
  const [numberVerfuegbar, setNumberVerfuegbar] = useState("")
  const [numberGesamt, setnumberGesamt] = useState("")


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllBoats();
        setFetchData(data.result);

        //setting numberGesamt value:
        const checkNumberGesamt = () => {
          setnumberGesamt(fetchData.length)
        }
        checkNumberGesamt()


        // const checkNumberVerfuegbar = () => {
        //   const verfuegbareBoote = fetchData.filter((boot) =>
        //     boot.termine.every((item) =>
        //       Object.values(item).every((value) => value === true)
        //     )
        //   );
        //   setNumberVerfuegbar(verfuegbareBoote.length);
        // };
        // checkNumberVerfuegbar();
      } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
      }
    };
    getData();
  }, [numberGesamt]);

console.log(fetchData);
  return (
    <section className="content_layout">
      <article className="dashboardContent">
        <div className="icons reserv">Reservierungen
        <div className="statisticNumbers" >{numberReservierung}</div>
        </div>
        <div className="icons verfueg">Verfügbare Boote
        <div className="statisticNumbers" >{numberVerfuegbar}</div>
        </div>
        <div className="icons gesamt">Boote Gesamt
        <div className="statisticNumbers" >{numberGesamt}</div>
        </div>
      </article>
    </section>
)};

export default Dashboard;
