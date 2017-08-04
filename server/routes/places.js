const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', function(req, res) {
  db.getPlaces()
  .then(function(places) {
    res.json(places)
  })
.catch(function (err) {
   res.status(500).send('DATABASE ERROR: ' + err.message)
 })
})

router.post('/', function(req, res) {
  db.addPlace(req.body)
  .then(function(body) {
    req.body.id = body[0]
    res.json(req.body)
  })
  .catch(function (err) {
     res.status(500).send('DATABASE ERROR: ' + err.message)
   })
  })

router.delete('/:id', (req, res) => {
  db.deletePlace(req.params.id)
    .then(() => {
      res.sendStatus(204)
    })
    .catch(err => {
      res.sendStatus(500).send('DATABASE ERROR: ' + err.message)
})
})


module.exports = router
