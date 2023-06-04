import express from 'express'
import cors from 'cors'
import shortenUrlController from './src/routes/shorten-url/controller'
import getOriginalUrlController from './src/routes/get-original-url/controller'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/get-original-url/:slug', getOriginalUrlController)
app.post('/shorten-url', shortenUrlController)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

