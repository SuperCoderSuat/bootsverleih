import { BooteDAO } from "../data-acces/index.js";
import { createBoat } from "../domain/index.js";

export async function addBoat(bootInfo) {
    const boot = createBoat(bootInfo);
    return BooteDAO.insertOne(boot);
}
