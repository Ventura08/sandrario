import { Turma } from "@prisma/client";
import TurmaModel from "../models/TurmaModel";

class TurmaController {
    model = new TurmaModel()
    async getTurmas(): Promise<Turma[]> {
        return this.model.getTurmas()
    }

    async createTurma(data: Turma): Promise<Turma> {
        return this.model.createTurma(data)
    }
}

export default TurmaController;
