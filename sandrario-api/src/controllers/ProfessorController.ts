import { Professor } from "@prisma/client";
import { errorMessages } from "../utils/strings/errorMessages";
import ProfessorModel from "../models/ProfessorModel";

class ProfessorController {
    model = new ProfessorModel()
    async getProfessores(): Promise<Professor[] | string> {
        try {
        return this.model.getProfessores()
        } catch (error) {
            return errorMessages.getEndPointErrorMsg
        }
    }
}

export default ProfessorController;
