const express = require('express')
const mongoose = require('mongoose')

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://rafo:password@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))