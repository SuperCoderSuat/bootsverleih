import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/boote');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Hier kannst du mit den erhaltenen Daten arbeiten
        setData(data);
        console.log(data); // console.log innerhalb des useEffect
      } catch (error) {
        console.error('Fetch fehlgeschlagen:', error);
      }
    };

    fetchData();
  }, []); // Leeres Array als zweites Argument, damit der Effekt nur einmalig beim Mounten der Komponente ausgeführt wird

  return <div></div>;
};

export default Dashboard;
