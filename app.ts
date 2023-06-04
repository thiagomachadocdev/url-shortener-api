import express from 'express'
import controller from './src/controller'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.post('/shorten-url', controller)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

