const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/boote');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Hier kannst du mit den erhaltenen Daten arbeiten
      console.log(data);
      return data; // Daten zurückgeben
    } catch (error) {
      console.error('Fetch fehlgeschlagen:', error);
    }
}

export default fetchData;
