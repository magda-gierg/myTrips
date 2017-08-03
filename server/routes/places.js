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




module.exports = router
