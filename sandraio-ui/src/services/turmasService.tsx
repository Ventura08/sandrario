import { TurmasInterface } from "../interfaces/turmaInterface";
import { Api } from "../providers";

export const getAllTurmas = () => Api.get<TurmasInterface[]>('/turmas')