import { Disciplina } from "@prisma/client";
import DisciplinaModel from "../models/DisciplinaModel";

class DisciplinaController {
    model = new DisciplinaModel()
    async getDisciplinas(): Promise<Disciplina[]> {
        return this.model.getDisciplinas()
    }
}

export default DisciplinaController;
