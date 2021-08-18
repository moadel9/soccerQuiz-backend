import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    question: { type: String },
    choices: [{ type: String }],
    answer: { type: String },
  },
  {
    timestamps: true,
  }
)
const Question = mongoose.model("Question", userSchema)
export default Question
