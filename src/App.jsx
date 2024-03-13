import axios from 'axios';
import './App.css';

function App() {


  const OK = async () => {
    const request = await axios.get('/api/OK');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const created = async () => {
    const request = await axios.get('/api/created');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const noContent = async () => {
    const request = await axios.get('/api/noContent');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const notModified = async () => {
    const request = await axios.get('/api/notModified');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const badRequest = async () => {
    const request = await axios.get('/api/badRequest');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.data.statusCode}
    `)

    .catch((error) => {
      alert('Error has occurred.')
    })
  }
  const unauthorized = async () => {
    const request = await axios.get('/api/unauthorized');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const forbidden = async () => {
    const request = await axios.get('/api/forbidden');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const notFound = async () => {
    const request = await axios.get('/api/notFound');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const conflict = async () => {
    const request = await axios.get('/api/conflict');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const gone = async () => {
    const request = await axios.get('/api/gone');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }
  const internalServerError = async () => {
    const request = await axios.get('/api/internalServerError');

    alert(`Server responded with the following:
    Message: ${request.data.message}
    Status: ${request.status}
    `)
  }

  return (
    <>
      <div>
        Welcome to my Test Site
      </div>

      <div>
        <button onClick={() => OK()}>200: OK</button>
        <button onClick={() => created()}>201: Created</button>
        <button onClick={() => noContent()}>204: No Content</button>
        <button onClick={() => notModified()}>304: Not Modified</button>
        <button onClick={() => badRequest()}>400: Bad Request</button>
        <button onClick={() => unauthorized()}>401: Unauthorized</button>
        <button onClick={() => forbidden()}>403: Forbidden</button>
        <button onClick={() => notFound()}>404: Not Found</button>
        <button onClick={() => conflict()}>409: Conflict</button>
        <button onClick={() => gone()}>410: Gone</button>
        <button onClick={() => internalServerError()}>500: Internal Server Error</button>
      </div>
    </>
  )
}

export default App
