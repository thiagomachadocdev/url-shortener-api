import crypto from 'crypto'
import model from './model'

interface Data {
  originalUrl: string
}

const service = async (data: Data) => {
  try {
    const validUrl = new URL(data.originalUrl).toString()

    const url = await model({
      originalUrl: validUrl,
      slug: crypto.randomBytes(3).toString('hex'),
    })

    return url
  } catch (err) {
    return err
  }
}

export default service

