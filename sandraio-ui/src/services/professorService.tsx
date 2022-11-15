import { ProfessorInterface } from "../interfaces/professorInterface";
import { Api } from "../providers";

export const getAllProfessores = () => Api.get<ProfessorInterface[]>('/professores')

export const createProfessores = (turma: ProfessorInterface) =>
  Api.post<{ turma: ProfessorInterface }>('/professores', {
    nome: turma.nome,
    disciplina_id: turma.disciplina_id,
    disciplina: turma.disciplina
  })