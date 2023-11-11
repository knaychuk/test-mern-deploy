const People = require('../models/personModel')

const getPeople = async (req, res) => {
  try {
    const people = await People.find({})
    res.status(200).json(people)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

const createPerson = async (req, res) => {
  const { itemId, name, age } = req.body

  try {
    const person = await People.create({ itemId, name, age })
    res.status(200).json(person)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

const getSpecificPeople = async (req, res) => {
  const id = req.params.id

  try {
    const item = await People.find({itemId: id})
    res.status(200).json(item)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

module.exports = { getPeople, createPerson, getSpecificPeople }