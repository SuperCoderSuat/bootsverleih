import express from "express";
import { BootService } from "../services/index.js";

const bootRouter = express.Router();

bootRouter.get("/", async function getAllBoats(_, res) {
    try {
        const result = await BootService.getAllBoats();
        res.json({ success: true, result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error,
            message: error.message || "could not retrieve boats",
        });
    }
});
