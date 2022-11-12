import { Professor } from '@prisma/client'
import MainModel from './MainModel'

class ProfessorModel extends MainModel {
  prisma = super.getInstance()
  async getProfessores (): Promise<Professor[]> {
    return await (await this.prisma).professor.findMany({
      include: {
        disciplina: true
      }
    })
  }

  async createProfessor (data: Professor): Promise<Professor> {
    return await (await this.prisma).professor.create({
      data
    })
  }

  async updateProfessor (id: number, data: Professor): Promise<Professor> {
    return await (await this.prisma).professor.update({
      where: {
        id
      },
      data
    })
  }

  async deleteProfessor (id: number): Promise<Professor> {
    return await (await this.prisma).professor.delete({
      where: {
        id
      }
    })
  }
}

export default ProfessorModel
