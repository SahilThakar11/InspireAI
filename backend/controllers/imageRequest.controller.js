import ImageRequest from "../models/imageRequest.model.js";
import { generateImageWithAI } from "../utils/ai.utils.js";
import User from "../models/user.model.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (user.credits < 1) {
      return res
        .status(400)
        .json({ error: "Insufficient credits! Ask Developer or buy Premium!" });
    }

    const imageUrl = await generateImageWithAI(prompt);

    if (!imageUrl) {
      return res.status(500).json({ error: "Failed to generate image" });
    }

    const imageRequest = new ImageRequest({
      user: userId,
      imageUrl,
      prompt,
      creditsUsed: 1,
      generatedAt: new Date(),
    });

    user.credits -= 1;
    await user.save();
    await imageRequest.save();

    res.status(201).json({ imageRequest });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to generate image! Internal server error" });
  }
};

export const getImageRequests = async (req, res) => {
  try {
    const userId = req.user._id;

    const imageRequests = await ImageRequest.find({ user: userId });

    res.status(200).json({ imageRequests });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to get image requests! Internal server error" });
  }
};

export const likeImageRequest = async (req, res) => {
  try {
    const { imageRequestId } = req.params;

    const imageRequest = await ImageRequest.findById(imageRequestId);

    if (!imageRequest) {
      return res.status(404).json({ error: "Image request not found" });
    }

    imageRequest.likes += 1;
    await imageRequest.save();

    res.status(200).json({ imageRequest });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to like image request! Internal server error" });
  }
};
