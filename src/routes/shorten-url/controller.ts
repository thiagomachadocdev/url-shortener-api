import { Request, Response } from 'express'
import service from './service'

const controller = async (req: Request, res: Response) => {
  try {
    const response = await service(req.body)

    return res.json(response)
  } catch (error) {
    res.json(error)
  }
}

export default controller

