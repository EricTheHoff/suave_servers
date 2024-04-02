import express from 'express';
import ViteExpress from 'vite-express'
import { database } from './database.js';

const app = express()
const port = 3000

// Basic database to store HTTP status information. Will move lengthier strings to index file for readability

app.use(express.json())

app.get('/api/status', (req, res) => {
  const buttonId = req.query.buttonId;
  res.json({
    message: {
      title: database[buttonId].title,
      subtitle: database[buttonId].subtitle,
      code: database[buttonId].code,
      description: database[buttonId].description,
      mdnLink: database[buttonId].mdnLink,
    },
  });
});

ViteExpress.listen(app, port, () => {
  console.log(`Server is live at http://localhost:${port}`)
})