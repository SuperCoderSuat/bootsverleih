export function createBoat({ id, baujahr, seriennummer, material, bootsart }) {
    if (!seriennummer) {
        throw new Error("Seriennummer ist Pflicht");
    }

    const boot = {
        id,
        baujahr,
        seriennummer,
        material,
        bootsart,
    };
    return boot;
}
