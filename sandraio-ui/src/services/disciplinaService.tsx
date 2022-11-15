import { DisciplinaInterface } from "../interfaces/disciplinaInterface";
import { Api } from "../providers";

export const getAllDisciplinas = () => Api.get<DisciplinaInterface[]>('/disciplinas')

export const createDisciplinas = (turma: DisciplinaInterface) =>
  Api.post<{ turma: DisciplinaInterface }>('/disciplinas', {
    nome: turma.nome,
    hora_aula: turma.hora_aula,
    aulas_totais: turma.aulas_totais
  })