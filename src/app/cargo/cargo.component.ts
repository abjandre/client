import {Component, OnInit} from '@angular/core';
import {CargoService} from './cargo.service';
import {Cargo} from './cargo';
import {Message} from 'primeng/api';
import {LoginService} from '../login/login.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cargos: Cargo[];
  showDialog = false;
  showConfirm = false;
  cargoEdit = new Cargo();
  msgs: Message[] = [];

  constructor(private cargoService: CargoService, private loginService: LoginService,
    private confirmationService: ConfirmationService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }


  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.cargoService.findAll().subscribe(e => this.cargos = e);
  }

  novo() {
    this.showDialog = true;
    this.cargoEdit = new Cargo();
  }

  salvarCargo() {
    this.cargoService.save(this.cargoEdit).subscribe(e => {
      this.cargoEdit = new Cargo();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];      
    },
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }
 
  editar(cargo: Cargo) {
    this.cargoEdit = cargo;
    this.showDialog = true;
  }

  confirmDelete(cargo: Cargo) {
    this.confirmationService.confirm({
        message: 'Essa ação não poderá ser desfeita',
        header: 'Deseja remover esse registro?',
       
        accept: () => {
            this.cargoService.delete(cargo.id).subscribe(() => {
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
this.cargoService.findAll().subscribe(e => this.cargos = e);
}
}
