import {LoginService} from '../login/login.service';
import {Component, OnInit} from '@angular/core';
import {ConsumoObraService} from '../consumoObra/consumoObra.service';
import {Devolucao} from './devolucao';
import {ConfirmationService, Message} from 'primeng/api';
import {ConsumoObra} from '../consumoObra/consumoObra';
import {DevolucaoService} from './devolucao.service';

@Component({
  templateUrl: './devolucao.component.html',
  styleUrls: ['./devolucao.component.css']
})
export class DevolucaoComponent implements OnInit {
  devolucoes: Devolucao[];
  consumoObras: ConsumoObra[];
  devolucaoEdit = new Devolucao();
  showDialog = false;
  pt: any;
  msgs: Message[] = [];

  constructor(private devolucaoService: DevolucaoService,
              private consumoObraService: ConsumoObraService,
              private loginService: LoginService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.devolucaoService.findAll().subscribe(e => this.devolucoes = e);
    this.consumoObraService.findAll().subscribe(e => this.consumoObras = e);
    this.pt = {
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    };
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  findAll() {
    this.devolucaoService.findAll().subscribe(e => this.devolucoes = e);
  }

  novo() {
    this.showDialog = true;
    this.devolucaoEdit = new Devolucao();
  }

  salvar() {
    this.devolucaoService.save(this.devolucaoEdit).subscribe(e => {
        this.devolucaoEdit = new Devolucao();
        this.findAll();
        this.showDialog = false;
        this.msgs = [{severity: 'sucess', summary: 'Confirmado', detail: 'Registro salvo com sucesso'}];
      },
      error => {
        this.msgs = [{severity: 'error', summary: 'Erro', detail: 'Certifique-se de preencher todos os campos.'}];
      });
  }

  editar(devolucao: Devolucao) {
    this.devolucaoEdit = devolucao;
    this.showDialog = true;
  }

  confirm(devolucao: Devolucao) {
    this.confirmationService.confirm({
      message: 'Essa ação não poderá ser desfeita',
      header: 'Deseja remover esse registro?',
      acceptLabel: 'SIM',
      rejectLabel: 'NÃO',
      accept: () => {
        this.devolucaoService.delete(devolucao.id).subscribe(() => {
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
    this.devolucaoService.findAll().subscribe(e => this.devolucoes = e);
  }
}
