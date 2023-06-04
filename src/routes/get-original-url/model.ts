import prisma from '../../configs/prisma'

interface Data {
  slug: string
}

const model = async (data: Data) => {
  const url = await prisma.url.findUnique({
    where: {
      slug: data.slug,
    },
  })

  return url
}

export default model

