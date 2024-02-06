import { ObjectId } from "mongodb";
import { getDb } from "./getDB.js";
import { createBoat } from "../domain/index.js";

export async function findAll() {
    const db = await getDb();
    const booteArray = await db.collection("boote").find({}).toArray();
    return booteArray.map((boot) => createBoat(boot));
}

export async function findById(bootId) {
    const db = await getDb();
    const boot = await db
        .collection("boote")
        .findOne({ _id: ObjectId.createFromHexString(bootId) });
    if (!boot) throw new Error("Boat with this id doesn't exist");
    return createBoat(boot);
}

export async function insertOne(newBoat) {
    const db = await getDb();
    const { acknowledged, insertedId } = await db
        .collection("boote")
        .insertOne(newBoat);
    if (acknowledged) return createBoat({ ...newBoat, _id: insertedId });
    else return null;
}

export async function deleteBoatById(bootId) {
    const db = await getDb();
    const boot = await db
        .collection("boote")
        .findOne({ _id: ObjectId.createFromHexString(bootId) });
    if (!boot) throw new Error("Boat with this id does not exist");
    const { acknowledged } = await db
        .collection("boote")
        .deleteOne({ _id: ObjectId.createFromHexString(bootId) });
    if (!acknowledged) return null;
    return createBoat(boot);
}

async function getBoatById(bootId) {
    const db = await getDb();
    const boat = await db
        .collection("boote")
        .findOne({ _id: ObjectId.createFromHexString(bootId) });
    return boat;
}

export async function findByIdAndUpdate(bootId, updatedDetails) {
    const db = await getDb();

    const result = await db
        .collection("boote")
        .updateOne(
            { _id: ObjectId.createFromHexString(bootId) },
            { $set: updatedDetails }
        );

    if (result.modifiedCount === 1) {
        return getBoatById(bootId);
    } else {
        return null;
    }
}
