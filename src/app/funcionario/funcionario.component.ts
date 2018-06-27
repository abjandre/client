import {Component, OnInit} from '@angular/core';
import {FuncionarioService} from './funcionario.service';
import {Funcionario} from './funcionario';
import { CargoService } from '../cargo/cargo.service';
import { Cargo } from '../cargo/cargo';
import { SetorService } from '../setor/setor.service';
import { Setor } from '../setor/setor';
import { Cidade } from '../cidade/cidade';
import { Estado } from '../estado/estado';
import { EstadoService } from '../estado/estado.service';
import { CidadeService } from '../cidade/cidade.service';
import {LoginService} from '../login/login.service';
import {Message} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];
  showDialog = false;
  funcionarioEdit = new Funcionario();
  cargos: Cargo[];
  setores: Setor[];
  cidades: Cidade[];
  estados: Estado[];
  cidadeEdit = new Cidade();
  estadoEdit = new Estado();
  msgs: Message[] = [];
  
  constructor(private funcionarioService: FuncionarioService
              , private cargoService: CargoService, private setorService: SetorService
              , private estadoService:EstadoService, private cidadeService:CidadeService
              , private loginService: LoginService, private confirmationService: ConfirmationService
) {

  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
    this.cargoService.findAll().subscribe(e => this.cargos = e);
    this.setorService.findAll().subscribe(e => this.setores = e);
    this.estadoService.findAll().subscribe(e => this.estados = e);
  }

  buscaCidades(estado): void{
  	this.cidadeService.findByEstado(estado).subscribe(c => this.cidades = c);
  }
  

  findAll() {
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
  }

  novo() {
    this.showDialog = true;
    this.funcionarioEdit = new Funcionario();
  }

  salvar() {
    this.funcionarioService.save(this.funcionarioEdit).subscribe(e => {
      this.funcionarioEdit = new Funcionario();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];            
    },
     error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(funcionario: Funcionario) {
    this.funcionarioEdit = funcionario;
    this.showDialog = true;
  
  }

  confirmDelete(funcionario: Funcionario) {
    this.confirmationService.confirm({
        message: 'Essa ação não poderá ser desfeita',
        header: 'Deseja remover esse registro?',
       
        accept: () => {
            this.funcionarioService.delete(funcionario.id).subscribe(() => {
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
this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
}

 
}
