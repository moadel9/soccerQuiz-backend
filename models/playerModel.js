import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    score: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
)
const Player = mongoose.model("Player", userSchema)
export default Player
