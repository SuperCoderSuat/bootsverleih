import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_PATH;
const client = new MongoClient(url);

let _db;

export async function getDb() {
    if (_db && _db instanceof Db) return _db;
    await client.connect();
    const db = client.db("bootsverleih");
    _db = db;
    return db;
}
