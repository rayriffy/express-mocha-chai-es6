import bodyParser from 'body-parser'
import chalk from 'chalk'
import express from 'express'
import cors from 'cors'

const {PORT = 3000} = process.env

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.use(cors())

server.get('/', (req, res) => {
  res.status(200).send({
    message: 'OK',
  })
})

server.post('/', (req, res) => {
  res.status(200).send({
    message: 'OK with POST',
  })
})

server.all('*', (req, res) => {
  res.status(404).send({
    message: 'not found',
  })
})

server.listen(PORT, () => {
  console.log(`${chalk.black.bgGreen(' INFO ')} app is running on port ${PORT}`)
})

export default server