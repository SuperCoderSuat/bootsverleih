export function createBoat({
    _id,
    baujahr,
    seriennummer,
    material,
    bootsart,
    termine,
}) {
    if (!seriennummer) {
        throw new Error("Seriennummer ist Pflicht");
    }

    const boot = {
        _id,
        baujahr,
        seriennummer,
        material,
        bootsart,
        termine,
    };
    return boot;
}
