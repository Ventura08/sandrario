import { Agendamento } from '@prisma/client'
import AgendamentoModel from '../models/AgendamentoModel'

class AgendamentoController {
  model = new AgendamentoModel()
  async getAgendamentos (): Promise<Agendamento[]> {
    return await this.model.getAgendamentos()
  }

  async createAgendamento (data: Agendamento): Promise<Agendamento> {
    return await this.model.createAgendamento(data)
  }
}

export default AgendamentoController
