import { Professor } from "@prisma/client";
import ProfessorModel from "../models/ProfessorModel";

class ProfessorController {
    model = new ProfessorModel()
    async getProfessores(): Promise<Professor[]> {
        return this.model.getProfessores()
    }
}

export default ProfessorController;
