import { ObjectId } from "mongodb";
import { getDB } from "./getDB.js";
import { createBoat } from "../domain/index.js";

export async function findAll() {
    const db = await getDB();
    const booteArray = await db.collection("boote").find({}).toArray();
    return booteArray.map((boot) => createBoat(boot));
}
