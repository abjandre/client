import {Component, OnInit} from '@angular/core';
import {LocalService} from './local.service';
import {Local} from './local';
import {LoginService} from '../login/login.service';
import {Message} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {Cidade} from '../cidade/cidade';
import {CidadeService} from '../cidade/cidade.service';

@Component({
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  locais: Local[];
  cidades: Cidade[];
  showDialog = false;
  showConfirm = false;
  localEdit = new Local();
  msgs: Message[] = [];

  constructor(private localService: LocalService,
              private confirmationService: ConfirmationService,
              private cidadeService: CidadeService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  mostrarConfirm(condicao: boolean) {
	this.showConfirm = condicao;
  }

  findAll() {
    this.localService.findAll().subscribe(e => this.locais = e);
  }

  novo() {
    this.showDialog = true;
    this.localEdit = new Local();
  }

  salvar() {
    this.localService.save(this.localEdit).subscribe(e => {
      this.localEdit = new Local();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(local: Local) {
    this.localEdit = local;
    this.showDialog = true;
  }

  remover(local: Local) {
    this.localService.delete(local.id).subscribe(() => {
      this.findAll();
	  this.showConfirm = false;
    });
  }

  confirmDelete(local: Local){
	  this.confirmationService.confirm({
		  message:'Essa ação não poderá ser desfeita',
		  header:'Deseja remover esse registro?',
		  accept:()=>{this.localService.delete(local.id).subscribe(()=>{
			  this.findAll();
			  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
		  });
		}
	  });
  }
}
