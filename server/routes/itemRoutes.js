const express = require('express')

const router = express.Router()

const { getItems, getSpecificItems, createItem } = require('../controllers/itemController')

const { getPeople, getSpecificPeople, createPerson } = require('../controllers/personController')


router.get('/getItems', getItems)

router.get('/getItems/:id', getSpecificItems)

router.post('/createItem', createItem)

router.delete('/:id', (req, res) => {
  res.send("Delete specific item")
})

router.patch('/:id', (req, res) => {
  res.send("Update specific item")
})

router.get('/getPeople', getPeople) 

router.get('/getPeople/:id', getSpecificPeople)

router.post('/createPerson', createPerson)

module.exports = router