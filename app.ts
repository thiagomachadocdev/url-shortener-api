import express from 'express'
import controller from './src/controller'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/shorten-url', controller)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
