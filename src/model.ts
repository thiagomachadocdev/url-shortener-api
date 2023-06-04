import prisma from './prisma'

interface Data {
  originalUrl: string
  slug: string
}

const model = async (data: Data) => {
  const url = await prisma.url.create({
    data: {
      originalUrl: data.originalUrl,
      slug: data.slug,
    },
  })

  return url
}

export default model

