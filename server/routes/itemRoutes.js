const express = require('express')

const router = express.Router()

const { getItems, getSpecificItem, createItem } = require('../controllers/itemController')

const { getPeople, createPerson } = require('../controllers/personController')


router.get('/getItems', getItems)

router.get('/getItem/:id', getSpecificItem)

router.post('/createItem', createItem)

router.delete('/:id', (req, res) => {
  res.send("Delete specific item")
})

router.patch('/:id', (req, res) => {
  res.send("Update specific item")
})

router.get('/getPeople', getPeople) 

router.post('/createPerson', createPerson)

module.exports = router