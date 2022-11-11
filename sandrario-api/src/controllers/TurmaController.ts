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

    async updateTurma(id: number, data: Turma): Promise<Turma> {
        return this.model.updateTurma(id, data)
    }

    async deleteTurma(id: number): Promise<Turma> {
        return this.model.deleteTurma(id)
    }
}

export default TurmaController;
