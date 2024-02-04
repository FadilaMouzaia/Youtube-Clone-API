import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {    //which video we are commenting
      type: String,
      required: true,
    },
    desc: {
      type: String,  //our text
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
