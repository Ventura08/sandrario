import DisciplinaController from '../controllers/DisciplinaController';
import express, {Request, Response } from 'express';

const DisciplinaRoutes = (app: express.Application) => {
    const controller = new DisciplinaController()
    
    app.get('/disciplinas', async (req: Request, res: Response) => {
        try {
            return res.json(await controller.getDisciplinas());
        } catch (error) {
            res.send(error)
        }
    })
}

export default DisciplinaRoutes;
