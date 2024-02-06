import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { bootRouter } from "./routes/index.js";
// import { bootRouter, reservierungsRouter } from "./routes/index.js";

// Laden von Umgebungsvariablen aus der .env-Datei
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// routes
app.use("/api/v1/boote", bootRouter.default);
// GET /api/v1/boote/
// GET /api/v1/boote/:bootId
// POST /api/v1/boote/
// DELETE /api/v1/boote/:bootId
// PATCH /api/v1/boote/:bootId

// app.use("api/v1/reservierungen", reservierungsRouter.default);

app.listen(PORT, () => console.log("Server listening on port", PORT));
