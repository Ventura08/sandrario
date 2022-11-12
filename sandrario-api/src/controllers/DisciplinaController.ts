import { Disciplina } from '@prisma/client'
import DisciplinaModel from '../models/DisciplinaModel'

class DisciplinaController {
  model = new DisciplinaModel()
  async getDisciplinas (): Promise<Disciplina[]> {
    return await this.model.getDisciplinas()
  }

  async createDisciplina (data: Disciplina): Promise<Disciplina> {
    return await this.model.createDisciplina(data)
  }

  async updateDisciplina (id: number, data: Disciplina): Promise<Disciplina> {
    return await this.model.updateDisciplina(id, data)
  }

  async deleteDisciplina (id: number): Promise<Disciplina> {
    return await this.model.deleteDisciplina(id)
  }
}

export default DisciplinaController
