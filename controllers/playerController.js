import Player from "../models/playerModel.js"

export const submitPlayer = async (req, res) => {
  try {
    if (req.body.name === "") {
      res.status(400).json("Name is required")
    }
    const name = req.body.name
    const player = new Player({
      name,
    })
    const createdPlayer = await player.save()
    res.send({ message: "player Created", player: createdPlayer })
  } catch (error) {
    res.status(400).send(error)
  }
}

export const updateScore = async (req, res) => {
  try {
    const id = req.params.id
    const player = await Player.findById(id)
    if (player) {
      player.score = player.score + 1
      const updatedPlayer = await player.save()
      res.send({ message: "score updated", player: updatedPlayer })
    }
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}
