const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const places = require('./routes/places')


const server = express()
server.use(express.static('public'))

server.use('/v1/places', places)


// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../public/index.html'))
// })

module.exports = server
