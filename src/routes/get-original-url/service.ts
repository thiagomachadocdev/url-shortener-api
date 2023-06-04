import model from './model'

interface Data {
  slug: string
}

const service = async (data: Data) => {
  const url = await model({
    slug: data.slug,
  })

  return url
}

export default service

