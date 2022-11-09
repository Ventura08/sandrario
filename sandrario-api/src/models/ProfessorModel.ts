import { Professor } from "@prisma/client";
import MainModel from "./MainModel";

class ProfessorModel extends MainModel {
    prisma = super.getInstance()
    async getProfessores(): Promise<Professor[]> {
        return (await this.prisma).professor.findMany()
    }
}

export default ProfessorModel;

