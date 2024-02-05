import { BooteDAO } from "../data-acces/index.js";

export async function getAllBoats() {
    const boote = await BooteDAO.findAll();
    return boote.map((boot) => asBoatListItem(boot));
}

function asBoatListItem(boot) {
    return {
        id: boot.id,
        seriennummer: boot.seriennummer,
        material: boot.material,
        bootsart: boot.bootsart,
    };
}
