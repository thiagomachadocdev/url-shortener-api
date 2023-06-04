import { Request, Response } from 'express'
import service from './service'

const controller = async (req: Request, res: Response) => {
  try {
    const response = await service({ slug: req.params.slug })

    return res.json(response)
  } catch (error) {
    return res.json(error)
  }
}

export default controller

