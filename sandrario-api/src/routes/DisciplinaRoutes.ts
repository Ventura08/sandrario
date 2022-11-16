import DisciplinaController from '../controllers/DisciplinaController'
import { errorMessages } from '../utils/strings/errorMessages'
import express, { Request, Response } from 'express'

const DisciplinaRoutes = (app: express.Application): any => {
  const controller = new DisciplinaController()

  app.get('/disciplinas', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.getDisciplinas())
    } catch (error) {
      return res.status(404).send(errorMessages.getEndPointErrorMsg)
    }
  })

  app.post('/disciplinas', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.createDisciplina(req.body))
    } catch (err) {
      return res.status(404).send(errorMessages.postEndPointErrorMsg)
    }
  })

  app.patch('/disciplinas/:id', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.updateDisciplina(Number(req.params.id), req.body))
    } catch (error) {
      return res.status(404).send(errorMessages.patchEndPointErrorMsg)
    }
  })

  app.delete('/disciplinas/:id', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.deleteDisciplina(Number(req.params.id)))
    } catch (error) {
      return res.status(404).send(errorMessages.deleteEndPointErrorMsg)
    }
  })
}

export default DisciplinaRoutes
