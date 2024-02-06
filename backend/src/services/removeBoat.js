import { BooteDAO } from "../data-acces/index.js";

export async function removeBoat(bootId) {
    const deletedBoat = await BooteDAO.deleteBoatById(bootId);
    return deletedBoat;
}
