import {Obra} from '../obra/obra';
import {Produto} from '../produto/produto';

export class ConsumoObra {

  id: number;
  obra: Obra;
  qtd: number;
  produto: Produto;
}

