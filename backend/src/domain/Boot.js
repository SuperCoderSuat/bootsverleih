export function createBoat({ _id, baujahr, seriennummer, material, bootsart }) {
    if (!seriennummer) {
        throw new Error("Seriennummer ist Pflicht");
    }

    const boot = {
        _id,
        baujahr,
        seriennummer,
        material,
        bootsart,
    };
    return boot;
}
