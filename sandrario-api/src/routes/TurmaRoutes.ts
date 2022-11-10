import TurmaController from '../controllers/TurmaController';
import express, {Request, Response } from 'express';

const TurmaRoutes = (app: express.Application) => {
    const controller = new TurmaController()
    
    app.get('/turmas', async (req: Request, res: Response) => {
        try {
            return res.json(await controller.getTurmas());
        } catch (error) {
            res.send(error)
        }
    })

    app.post('/turmas', async (req: Request, res: Response) => {
        try {
            return res.json(await controller.createTurma(req.body));
        } catch (error) {
            res.send(error)
        }
    })
}

export default TurmaRoutes;
