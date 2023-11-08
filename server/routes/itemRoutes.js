const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
  res.send("Got all items")
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