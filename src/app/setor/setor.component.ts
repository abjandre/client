import {Component, OnInit} from '@angular/core';
import {SetorService} from './setor.service';
import {Setor} from './setor';
import {LoginService} from '../login/login.service'; 
import {Message} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  setores: Setor[];
  showDialog = false;
  showConfirm = false;
  setorEdit = new Setor();
  msgs: Message[] = [];

  constructor(private setorService: SetorService, 
    private loginService: LoginService, 
    private confirmationService: ConfirmationService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }


  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.setorService.findAll().subscribe(e => this.setores = e);
  }

  novo() {
    this.showDialog = true;
    this.setorEdit = new Setor();
  }

  salvar() {
    this.setorService.save(this.setorEdit).subscribe(e => {
      this.setorEdit = new Setor();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];      
    },
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(setor: Setor) {
    this.setorEdit = setor;
    this.showDialog = true;
  }

  confirmDelete(setor: Setor) {
    this.confirmationService.confirm({
        message: 'Essa ação não poderá ser desfeita',
        header: 'Deseja remover esse registro?',
       
        accept: () => {
            this.setorService.delete(setor.id).subscribe(() => {
            this.findAll();
            this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
          },
          error => {
            this.msgs = [{severity:'error', summary:'Erro', detail:'Este registro nao pode ser removido.'}];
          });
        }
    });
}

cancelar(){
  this.showDialog = false;
  this.setorService.findAll().subscribe(e => this.setores = e);
}


  remover(setor: Setor) {
    this.setorService.delete(setor.id).subscribe(() => {
      this.findAll();
    });
  }
}
