import Warehouse from "@models/prompt";
import { connectToDb } from "@utils/database";

export const POST = async (request) => {
  try {
    const { userId, prompt, tag, location, image } = await request.json();

    await connectToDb();
    
    const newPrompt = new Warehouse({ creator: userId, prompt, tag, location, image });
    console.log(newPrompt);
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
