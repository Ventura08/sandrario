import ProfessorController from '../controllers/ProfessorController'
import express, { Request, Response } from 'express'
import { errorMessages } from '../utils/strings/errorMessages'

const ProfessorRoutes = (app: express.Application): any => {
  const controller = new ProfessorController()

  app.get('/professores', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.getProfessores())
    } catch (error) {
      return res.status(404).send(errorMessages.getEndPointErrorMsg)
    }
  })

  app.post('/professores', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.createProfessor(req.body))
    } catch (error) {
      return res.status(404).send(errorMessages.postEndPointErrorMsg)
    }
  })

  app.patch('/professores/:id', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.updateProfessor(Number(req.params.id), req.body))
    } catch (error) {
      return res.status(404).send(errorMessages.patchEndPointErrorMsg)
    }
  })

  app.delete('/professores/:id', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.deleteProfessor(Number(req.params.id)))
    } catch (error) {
      return res.status(404).send(errorMessages.deleteEndPointErrorMsg)
    }
  })
}

export default ProfessorRoutes
