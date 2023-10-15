import Warehouse from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDb()

        const prompt = await Warehouse.findById(params.id).populate("creator")
        if (!prompt) return new Response("Warehouse Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { price } = await request.json();

    try {
        await connectToDb();

        // Find the existing prompt by ID
        const existingPrompt = await Warehouse.findById(params.id);

        if (!existingPrompt) {
            return new Response("Warehouse not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.isVerified = true;
        existingPrompt.priceString = price;

        // existingPrompt.creator = creator;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Warehouse", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDb();

        // Find the prompt by ID and remove it
        await Warehouse.findByIdAndRemove(params.id);

        return new Response("Warehouse deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};