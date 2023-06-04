import crypto from 'crypto'
import model from './model'

interface Data {
  originalUrl: string
}

const service = async (data: Data) => {
  const validUrl = new URL(data.originalUrl).toString()

  const url = await model({
    originalUrl: validUrl,
    slug: crypto.randomBytes(3).toString('hex'),
  })

  return url
}

export default service

