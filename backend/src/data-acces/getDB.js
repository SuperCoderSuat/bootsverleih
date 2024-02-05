import { DB, Mongoclient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_PATH;
const client = new Mongoclient(url);

let _db;

export async function getDB() {
    if (_db && _db instanceof DB) return _db;
    await client.connect();
    const db = client.db("bootsverleih");
    _db = db;
    return db;
}
