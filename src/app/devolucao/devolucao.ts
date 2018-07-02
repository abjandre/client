import {ConsumoObra} from '../consumoObra/consumoObra';

export class Devolucao {

  id: number;
  consumoObra: ConsumoObra;
  qtd: number;
  data: Date;
  constructor() {
    this.data = new Date();
  }
}

