import { BooteDAO } from "../data-acces/index.js";

export async function updateBoat(bootId, updatedDetails) {
    try {
        // Assuming YourDatabaseModel is your Mongoose model for boats
        const result = await BooteDAO.findByIdAndUpdate(
            bootId,
            updatedDetails,
            { new: true } // This option returns the updated document
        );

        return result;
    } catch (error) {
        console.error("Error in updateBoat:", error);
        throw error;
    }
}
