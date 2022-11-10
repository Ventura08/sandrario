import { Turma } from "@prisma/client";
import MainModel from "./MainModel";

class ProfessorModel extends MainModel {
    prisma = super.getInstance()
    async getTurmas(): Promise<Turma[]> {
        return (await this.prisma).turma.findMany()
    }

    async createTurma(data: Turma): Promise<Turma> {
        return (await this.prisma).turma.create({
            data: data
        })
    }
}

export default ProfessorModel;

