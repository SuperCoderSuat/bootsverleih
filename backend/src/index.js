import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { bootRouter } from "./routes/index.js";

// Laden von Umgebungsvariablen aus der .env-Datei
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// routes
app.get("/", bootRouter.default);

app.listen(PORT, () => console.log("Server listening on port", PORT));
