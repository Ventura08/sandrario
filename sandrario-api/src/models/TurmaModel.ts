import { Turma } from '@prisma/client'
import MainModel from './MainModel'

class ProfessorModel extends MainModel {
  prisma = super.getInstance()
  async getTurmas (): Promise<Turma[]> {
    return await (await this.prisma).turma.findMany()
  }

  async createTurma (data: Turma): Promise<Turma> {
    return await (await this.prisma).turma.create({
      data
    })
  }

  async updateTurma (id: number, data: Turma): Promise<Turma> {
    return await (await this.prisma).turma.update({
      where: {
        id
      },
      data
    })
  }

  async deleteTurma (id: number): Promise<Turma> {
    return await (await this.prisma).turma.delete({
      where: {
        id
      }
    })
  }
}

export default ProfessorModel
