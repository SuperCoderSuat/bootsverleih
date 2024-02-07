export async function getAllBoats() {
    const response = await fetch('/api/boote');
    return response.json();
  }
  
  export async function getSingleBoat(bootId) {
    const response = await fetch(`/api/boote/${bootId}`);
    return response.json();
  }
  
  export async function addNewBoat(bootdetail) {
    const response = await fetch('/api/boote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bootdetail),
    });
    return response.json();
  }
  
  export async function editBoat(bootId, updatedDetails) {
    const response = await fetch(`/api/boote/${bootId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDetails),
    });
    return response.json();
  }
  
  export async function deleteBoat(bootId) {
    const response = await fetch(`/api/boote/${bootId}`, {
      method: 'DELETE',
    });
    return response.json();
  }
  
