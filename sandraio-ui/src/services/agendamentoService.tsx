
import { AgendamentoInterface } from "../interfaces/agendamentoInterface";
import { Api } from "../providers";

export const getAllAgendamentos = () => Api.get<AgendamentoInterface[]>('/agendamentos')

export const createAgendamento = (agendamento: AgendamentoInterface) =>
  Api.post<{ agendamento: AgendamentoInterface }>('/agendamentos', {
    turma_id: agendamento.turma_id,
    professor_id: agendamento.professor_id,
    data_inicio: agendamento.data_inicio,
    data_fim: agendamento.data_fim,
  })