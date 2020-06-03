import { Estado } from "./estado";

export class Cidade {
  id: number;
  nome: string;
  codigo_ibge: string;
  populacao_2010: number;
  estado_nome: Estado['nome'];
}
