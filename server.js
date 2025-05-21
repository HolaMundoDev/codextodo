import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
})

const Task = mongoose.model('Task', taskSchema)

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
