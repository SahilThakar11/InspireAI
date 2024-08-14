import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const generateImageWithAI = async (prompt) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data[0].url;
    console.log("Image generated: ", imageUrl);

    if (!imageUrl) {
      throw new Error("Failed to generate image");
    } else {
      return imageUrl;
    }
  } catch (error) {
    console.error("Failed to generate image with AI: ", error.message);
    throw new Error("Failed to generate image");
  }
};
