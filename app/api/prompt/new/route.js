import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const POST = async (request) => {
  try {
    const { userId, prompt, tag, location } = await request.json();

    await connectToDb();
    
    const newPrompt = new Prompt({ creator: userId, prompt, tag , location });
    // console.log(newPrompt);
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
