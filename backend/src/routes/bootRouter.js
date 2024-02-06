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

bootRouter.get("/:bootId", async function getSingleBoatDetails(req, res) {
    try {
        const bootId = req.params.bootId;
        const result = await BootService.getBoatDetail(bootId);
        console.log(result);
        res.json({ success: true, result });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            err,
            message: err.message || "could not provide boat details",
        });
    }
});

bootRouter.post("/", express.json(), async function addNewBoat(req, res) {
    try {
        const boatDetails = req.body;
        const result = await BootService.addBoat(boatDetails);
        res.status(201).json({ success: true, result });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succes: false,
            err,
            message: err.message || "could not add boat",
        });
    }
});

bootRouter.patch("/:bootId", express.json(), async function editBoat(req, res) {
    try {
        const bootId = req.params.bootId;
        const updatedDetails = req.body;

        // You may want to add validation here to ensure `updatedDetails` is not empty

        const result = await BootService.updateBoat(bootId, updatedDetails);
        res.json({ success: true, result });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            err,
            message: err.message || "could not update boat",
        });
    }
});

bootRouter.delete("/:bootId", async function deleteBoatById(req, res) {
    try {
        const bootId = req.params.bootId;
        const result = await BootService.removeBoat(bootId);
        res.status(201).json({ succes: true, result });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            succes: false,
            err,
            message: err.message || "could not delete boat",
        });
    }
});

export default bootRouter;
