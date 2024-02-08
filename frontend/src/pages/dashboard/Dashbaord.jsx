import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { getAllBoats } from "../../api/fetchBoote.js";

const Dashboard = () => {

  const [fetchData, setFetchData] = useState([])
  const [numberReservierung, setNumberReservierung] = useState("")
  const [numberVerfuegbar, setNumberVerfuegbar] = useState("")
  const [numberGesamt, setnumberGesamt] = useState("")
  let ausgebuchteBoote = 0 //wird als counter genutzt und dann von Gesamtzahl subtrahiert
  const uniqueKennungen = new Set(); //zur Erkennung von gruppierten Reservierungen

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

        //setting verfügbare Boote value:
        const checkNumberVerfuegbar = () => {
          fetchData.forEach((boot) => {
            const verfuegbareTermine = boot.termine.filter((termine) => termine.gebucht === false);
            if (verfuegbareTermine.length === 0) {
              ausgebuchteBoote++
            }
            setNumberVerfuegbar(numberGesamt-ausgebuchteBoote)
          });
        };
        checkNumberVerfuegbar();

        //setting Anzahl Reservierungen:
        const checkNumberReservierungen = () => {
          fetchData.forEach((boot) => {
            const kennungenEntitäten = boot.termine.filter((Kennungen) => Kennungen.Kennung !== "")
            kennungenEntitäten.forEach((Kennung) => {
              uniqueKennungen.add(Kennung.Kennung)
              setNumberReservierung(uniqueKennungen.size);
            })
          })
        }
        checkNumberReservierungen()

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
