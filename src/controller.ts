import { Request, Response } from 'express'
import service from './service'

const controller = async (req: Request, res: Response) => {
  const response = await service(req.body)

  return res.json(response)
}

export default controller

