export async function getAllBoats() {
    const response = await fetch('http://localhost:3000/api/v1/boote/');
    const data = await response.json()
    console.log(data);
    return data;
  }
  
  export async function getSingleBoat(bootId) {
    const response = await fetch(`http://localhost:3000/api/v1/boote/${bootId}`);
    return response.json();
  }
  
  export async function addNewBoat(boatDetails) {
    const response = await fetch('http://localhost:3000/api/v1/boote/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bootdetail),
    });
    return response.json();
  }
  
  export async function editBoat(bootId, updatedDetails) {
    const response = await fetch(`http://localhost:3000/api/v1/boote/${bootId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDetails),
    });
    return response.json();
  }
  
  export async function deleteBoat(bootId) {
    const response = await fetch(`http://localhost:3000/api/v1/boote/${bootId}`, {
      method: 'DELETE',
    });
    return response.json();
  }
  
