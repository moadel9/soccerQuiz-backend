import express from "express"
import { getQuestions, seedQuestions } from "../controllers/questionController.js"

const questionRouter = express.Router()

questionRouter.get("/seed", seedQuestions)
questionRouter.get("/", getQuestions)

export default questionRouter
