import TurmaController from '../controllers/TurmaController'
import express, { Request, Response } from 'express'
import { errorMessages } from '../utils/strings/errorMessages'

const TurmaRoutes = (app: express.Application): any => {
  const controller = new TurmaController()

  app.get('/turmas', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.getTurmas())
    } catch (error) {
      return res.status(404).send(errorMessages.getEndPointErrorMsg)
    }
  })

  app.post('/turmas', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.createTurma(req.body))
    } catch (error) {
      return res.status(404).send(errorMessages.postEndPointErrorMsg)
    }
  })

  app.patch('/turmas/:id', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.updateTurma(Number(req.params.id), req.body))
    } catch (error) {
      return res.status(404).send(errorMessages.patchEndPointErrorMsg)
    }
  })

  app.delete('/turmas/:id', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.deleteTurma(Number(req.params.id)))
    } catch (error) {
      return res.status(404).send(errorMessages.deleteEndPointErrorMsg)
    }
  })
}

export default TurmaRoutes
