import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Laden von Umgebungsvariablen aus der .env-Datei
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// CORS Middleware
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => res.send("it works :)"));

app.listen(PORT, () => console.log("Server listening on port", PORT));
