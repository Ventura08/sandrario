import { Agendamento } from './../../node_modules/.prisma/client/index.d'
import MainModel from './MainModel'

class AgendamentoModel extends MainModel {
  prisma = super.getInstance()
  async getAgendamentos (): Promise<Agendamento[]> {
    return (await this.prisma).agendamento.findMany({
      include: {
        professor: { include: { disciplina: true } },
        turma: true
      }

    })
  }

  async createAgendamento (data: Agendamento): Promise<Agendamento> {
    return (await this.prisma).agendamento.create({
      data
    })
  }
}

export default AgendamentoModel
