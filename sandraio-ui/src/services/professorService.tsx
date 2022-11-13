import { ProfessorInterface } from "../interfaces/professorInterface";
import { Api } from "../providers";

export const getAllProfessores = () => Api.get<ProfessorInterface[]>('/professores')