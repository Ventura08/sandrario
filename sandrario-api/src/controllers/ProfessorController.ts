import { Professor } from '@prisma/client'
import ProfessorModel from '../models/ProfessorModel'

class ProfessorController {
  model = new ProfessorModel()
  async getProfessores (): Promise<Professor[]> {
    return await this.model.getProfessores()
  }

  async createProfessor (data: Professor): Promise<Professor> {
    return await this.model.createProfessor(data)
  }

  async updateProfessor (id: number, data: Professor): Promise<Professor> {
    return await this.model.updateProfessor(id, data)
  }

  async deleteProfessor (id: number): Promise<Professor> {
    return await this.model.deleteProfessor(id)
  }
}

export default ProfessorController
