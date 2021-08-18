import Question from "../models/questionModel.js"
import data from "../data.js"

export const seedQuestions = async (req, res) => {
  try {
    const createdQuestions = await Question.insertMany(data)
    res.send({ createdQuestions })
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find({})
    questions.map((question) => {
      question.choices.sort(() => Math.random() - 0.5)
    })
    res.send(questions)
  } catch (error) {
    res.status(400).send(error)
  }
}
