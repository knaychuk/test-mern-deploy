const express = require('express')
const Item = require('../models/itemModel')
const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const items = await Item.find({})
    res.status(200).json(items)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
})

router.get('/:id', (req, res) => {
  res.send("Got specific item")
})

router.post('/', (req, res) => {
  res.send("Post new item")
})

router.delete('/:id', (req, res) => {
  res.send("Delete specific item")
})

router.patch('/:id', (req, res) => {
  res.send("Update specific item")
})

module.exports = router