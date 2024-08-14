import mongoose from "mongoose";

const imageRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    generatedAt: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ImageRequest = mongoose.model("ImageRequest", imageRequestSchema);

export default ImageRequest;
