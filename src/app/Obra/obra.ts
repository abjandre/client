import {Cliente} from '../cliente/cliente';
import {Ccusto} from '../ccusto/ccusto';
import {Fornecedor} from '../fornecedor/fornecedor';
import {Local} from '../local/local';

export class Obra {
  id: number;
  descricao: string;
  idCliente: Cliente;
  idCcusto: Ccusto;
  idFornecedor: Fornecedor;
  idLocal: Local;
  inicio: Date;
  fim: Date;
  inicioPrevisto: Date;
  fimPrevisto: Date;
  custoTotal: number;

}
