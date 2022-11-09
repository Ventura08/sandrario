import ProfessorController from '../controllers/ProfessorController';
import express, {Request, Response } from 'express';

const ProfessorRoutes = (app: express.Application) => {
    const controller = new ProfessorController()
    app.get('/professores', async (req: Request, res: Response) => {
        try {
            return res.json(await controller.getProfessores());
        } catch (error) {
            res.send(error)
        }
    })
}

export default ProfessorRoutes;
