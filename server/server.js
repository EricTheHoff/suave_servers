import express from 'express';
import ViteExpress from 'vite-express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/OK', (req, res) => {
  res.status(200).json({message: 'OK'})
})
app.get('/api/created', (req, res) => {
  res.status(201).json({message: 'Created'})
})
app.get('/api/noContent', (req, res) => {
  res.status(204).json({message: 'No Content'})
})
app.get('/api/notModified', (req, res) => {
  res.status(304).json({message: 'Not Modified'})
})
app.get('/api/badRequest', (req, res) => {
  res.status(400).json({message: 'Bad Request'})
})
app.get('/api/unauthorized', (req, res) => {
  res.status(401).json({message: 'Unauthorized'})
})
app.get('/api/forbidden', (req, res) => {
  res.status(403).json({message: 'Forbidden'})
})
app.get('/api/notFound', (req, res) => {
  res.status(404).json({message: 'Not Found'})
})
app.get('/api/conflict', (req, res) => {
  res.status(409).json({message: 'Conflict'})
})
app.get('/api/gone', (req, res) => {
  res.status(410).json({message: 'Gone'})
})
app.get('/api/internalServerError', (req, res) => {
  res.status(500).json({message: 'Internal Server Error'})
})



ViteExpress.listen(app, port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})