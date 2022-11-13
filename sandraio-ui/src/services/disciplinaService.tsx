import { DisciplinaInterface } from "../interfaces/disciplinaInterface";
import { Api } from "../providers";

export const getAllDisciplinas = () => Api.get<DisciplinaInterface[]>('/disciplinas')