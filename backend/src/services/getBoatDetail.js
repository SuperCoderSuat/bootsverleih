import { BooteDAO } from "../data-acces/index.js";

export async function getBoatDetail(bootId) {
    const foundBoat = await BooteDAO.findById(bootId);
    if (!foundBoat) throw new Error("could not find boat " + bootId);

    return { ...foundBoat };
}
