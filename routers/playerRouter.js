import express from "express"
import { submitPlayer, updateScore } from "../controllers/playerController.js"

const playerRouter = express.Router()

playerRouter.post("/submit", submitPlayer)
playerRouter.put("/updatescore/:id", updateScore)
export default playerRouter
