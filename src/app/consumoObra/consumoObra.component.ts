import {LoginService} from '../login/login.service';
import {Component, OnInit} from '@angular/core';
import {ConsumoObraService} from './consumoObra.service';
import {ConsumoObra} from './consumoObra';
import {Obra} from '../obra/obra';
import {ConfirmationService, Message} from 'primeng/api';
import {ObraService} from '../obra/obra.service';
import {ItemNotaService} from "../itemNota/itemNota.service";
import {ItemNota} from "../itemNota/itemNota";

@Component({
  templateUrl: './consumoObra.component.html',
  styleUrls: ['./consumoObra.component.css']
})
export class ConsumoObraComponent implements OnInit {

  consumoObras: ConsumoObra[];
  obras: Obra[];
  itemNotas: ItemNota[];
  showDialog = false;
  consumoObraEdit = new ConsumoObra();
  msgs: Message[] = [];

  constructor(private consumoObraService: ConsumoObraService,
              private obraService: ObraService,
              private itemNotaService: ItemNotaService,
              private loginService: LoginService,
              private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.findAll();
    this.obraService.findAll().subscribe(e => this.obras = e);
    this.itemNotaService.findAll().subscribe(e => this.itemNotas = e);
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  findAll() {
    this.consumoObraService.findAll().subscribe(e => this.consumoObras = e);
  }

  novo() {
    this.showDialog = true;
    this.consumoObraEdit = new ConsumoObra();
  }

  salvar() {
    this.consumoObraService.save(this.consumoObraEdit).subscribe(e => {
        this.consumoObraEdit = new ConsumoObra();
        this.findAll();
        this.showDialog = false;
        this.msgs = [{severity: 'sucess', summary: 'Confirmado', detail: 'Registro salvo com sucesso'}];
      },
      error => {
        this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Certifique-se de preencher todos os campos.'}];
      });
  }

  editar(consumoObra: ConsumoObra) {
    this.consumoObraEdit = consumoObra;
    this.showDialog = true;
  }

  confirm(consumoObra: ConsumoObra) {
    this.confirmationService.confirm({
      message: 'Essa ação não poderá ser desfeita',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO',
      accept: () => {
        this.consumoObraService.delete(consumoObra.id).subscribe(() => {
            this.findAll();
            this.msgs = [{severity: 'sucess', summary: 'Confirmado', detail: 'Registro removido com sucesso'}];
          },
          error => {
            this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Este registro não pode ser removido.'}];
          });
      }
    });
  }

  cancelar() {
    this.showDialog = false;
    this.consumoObraService.findAll().subscribe(e => this.consumoObras = e);
  }
}
