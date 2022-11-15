import { TurmasInterface } from "../interfaces/turmaInterface";
import { Api } from "../providers";

export const getAllTurmas = () => Api.get<TurmasInterface[]>('/turmas')

export const createTurmas = (turma: TurmasInterface) =>
  Api.post<{ turma: TurmasInterface }>('/turmas', {
    nome: turma.nome,
    quantidade_horarios: turma.quantidade_horarios,
  })