import { Disciplina } from "@prisma/client";
import MainModel from "./MainModel";

class ProfessorModel extends MainModel {
    prisma = super.getInstance()
    async getDisciplinas(): Promise<Disciplina[]> {
        return (await this.prisma).disciplina.findMany()
    }
}

export default ProfessorModel;

