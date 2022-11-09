import { Disciplina } from "./DisciplinaInterface";

export interface Professor{
    id: string;
    nome: string;
    disciplina: Disciplina;
}