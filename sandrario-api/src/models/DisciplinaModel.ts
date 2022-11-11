import { Disciplina } from "@prisma/client";
import MainModel from "./MainModel";

class ProfessorModel extends MainModel {
    prisma = super.getInstance()
    async getDisciplinas(): Promise<Disciplina[]> {
        return (await this.prisma).disciplina.findMany()
    }

    async createDisciplina(data: Disciplina): Promise<Disciplina> {
        return (await this.prisma).disciplina.create({
            data: data
        })
    }

    async updateDisciplina(id: number, data: Disciplina): Promise<Disciplina> {
        return (await this.prisma).disciplina.update({
            where: {
                id: id
            },
            data: data
        })
    }

    async deleteDisciplina(id: number): Promise<Disciplina> {
        return (await this.prisma).disciplina.delete({
            where: {
                id: id
            }
        })
    }
}

export default ProfessorModel;

