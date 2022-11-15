import AgendamentoController from '../controllers/AgendamentoController'
import express, { Request, Response } from 'express'
import { errorMessages } from '../utils/strings/errorMessages'

const AgendamentoRoutes = (app: express.Application): any => {
  const controller = new AgendamentoController()

  app.get('/agendamentos', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.getAgendamentos())
    } catch (error) {
      return res.json(errorMessages.getEndPointErrorMsg)
    }
  })

  app.post('/agendamentos', async (req: Request, res: Response) => {
    try {
      return res.json(await controller.createAgendamento(req.body))
    } catch (error) {
      return res.json(errorMessages.postEndPointErrorMsg)
    }
  })
}

export default AgendamentoRoutes
