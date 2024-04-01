import express from 'express';
import ViteExpress from 'vite-express'

const app = express()
const port = 3000

// Basic database to store HTTP status information. Will move lengthier strings to index file for readability.
const database = {
  0: {
    title: '200 OK',
    subtitle: 'Successful Response',
    code: `app.get('/api/your-route', (req, res) => {
      // Interact with your request data here.
      // Send back a '200 OK' with the res.json method.
      res.json({
        message: 'OK',
        status: 200,
      });
    });`,
    description: 'The 200 status code indicates that the request succeeded. The exact meaning of a 200 OK can vary, depending on the HTTP method used to prompt it.',
    mdnLink: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200'
  }
}

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