import { PessoaService } from './../pessoa/pessoa.service';
import { PerfilService } from './../perfil/perfil.service';
import { ClienteService } from './../cliente/cliente.service';
import { PessoaModule } from './../pessoa/pessoa.module';
import { Cliente } from './../cliente/cliente';
import { ItemNotaService } from './../itemNota/itemNota.service';
import { ItemNota } from './../itemNota/itemNota';
import {Component, OnInit} from '@angular/core';
import {NotaService} from './nota.service';
import {Nota} from './nota';
import { ProdutoService } from './../produto/produto.service';
import { Produto } from './../produto/produto';
import {LoginService} from '../login/login.service';
import { Pessoa } from './../pessoa/pessoa'; 

@Component({
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css'],
  selector: 'minha-lista-itensNota'
})

export class NotaComponent implements OnInit {
  itemNotaService: any;
  notas: Nota[];
  showDialog = false;
  notaEdit = new Nota();
  idProdutos: Produto[];
  itemNotaEdit = new ItemNota();
  editandoItem = false;
  clientes: Cliente[];
  pessoas: Pessoa[];
  pessoaEdit = new Cliente();
  //Array de Itens
  itens: Array<ItemNota> = [];

  constructor(private notaService: NotaService, private produtoService:ProdutoService, private loginService: LoginService,
  private clienteService:ClienteService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
    this.produtoService.findAll().subscribe(e=> this.idProdutos =e);
    this.clienteService.findAll().subscribe(e => this.clientes = e);
   
    
  }

  findAll() {
    this.notaService.findAll().subscribe(e => this.notas = e);
  }

  novo() {
    this.itens = [];
    this.showDialog = true;
    this.notaEdit = new Nota();
    this.itemNotaEdit = new ItemNota();
  }

  salvar() {
    this.notaEdit.itensNota = this.itens;
    this.notaService.save(this.notaEdit).subscribe(e => {
      this.notaEdit = e;
      this.findAll();
      this.showDialog = false;
    });
  }

  addItem() {
    if(!this.editandoItem){
      this.itens.push(this.itemNotaEdit);
    }
    console.log(this.itens);
    this.itemNotaEdit = new ItemNota;
    this.editandoItem = false;
  }

  editar(nota: Nota) {
    this.notaEdit = nota;
    this.itens = nota.itensNota;
    this.showDialog = true;
  }

  remover(nota: Nota) {
    this.notaService.delete(nota.id).subscribe(() => {
      this.findAll();
    });
  }

  editarItem(itemNota: ItemNota) {
    this.itemNotaEdit = itemNota;
    this.editandoItem = true;
  }

    removerItem(itemNota: ItemNota) {
const index = this.itens.indexOf(itemNota);
this.itens.splice(index,1);

  }

  calculaTotal(){ 
    let somaTotal =0;
for (var itemNota of this.itens) {

somaTotal += itemNota.quantidade * itemNota.produto.valor;
  }
  return somaTotal;
}

}
