const data = require('./mockup')
const express = require('express')
const app = express()

app.use(express.json())

const idNotFound = (id, res) => {
  console.log(id)
   if(!id) {
    return res.status(400).json({
      error: `id: ${id} not found`
    })
  }
}

const getNextId = () => {
  const id = Math.max(...peoples.map(p => p.id))

  return id + 1;
}

app.get('/api/persons', (req, res) => {
  res.status(200).json(data)
})

app.get('/info', (req, res) => {
  const dateTime = new Date()
  const size = data.length
  const info = `Phonebook has info for ${size} people`

  res.send(info)
  res.send(datetime)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)

  idNotFound(id, res);
  
  const person = data.find(p => p.id === id)
  
  res.status(200).json(person)
})

app.delete('/api/persons:id', (req, res) => {
  const id = Number(req.params.id)

  idNotFound(id, res);

  const personsUpdated = persons.filter(p => p.id !== id);

  res.status(200).json(personsUpdated)
})

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;

  if(!name || !number) {
    res.status(400).json({
      error: 'Invalid fields values'
    })

  }
  const hasPeopleOnList = data.some(p => p.name === name)

  if(hasPeopleOnList) {
    return res.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const newPeople = {
    name,
    number,
    id: getNextId()
  }

  data.push(newPeoples)
  return  res.status(200).json(data)


})

app.listen(3001)
console.log('server listening or port 3001')
