const Item = require('../models/itemModel')


//get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find({})
    res.status(200).json(items)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

const getSpecificItems = async (req, res) => {
  const id = req.params.id

  try {
    const item = await Item.findById(id)
    const itemsArray = Array.isArray(item) ? item : [item]

    res.status(200).json(itemsArray)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}

const createItem = async (req, res) => {
  const { name, color, number } = req.body

  try {
    const item = await Item.create({ name, color, number })
    res.status(200).json(item)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
}




module.exports = { getItems, getSpecificItems, createItem }