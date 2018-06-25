import {Component, OnInit} from '@angular/core';
import {CidadeService} from './cidade.service';
import {Cidade} from './cidade';
<<<<<<< HEAD
import {Estado} from '../estado/estado';
import {EstadoService} from '../estado/estado.service';
=======
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f

@Component({
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidades: Cidade[];
  showDialog = false;
  cidadeEdit = new Cidade();
<<<<<<< HEAD
  estados: Estado[];

  constructor(private cidadeService: CidadeService, private estadoService: EstadoService) {
  	
=======

  constructor(private cidadeService: CidadeService) {
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
  }

  ngOnInit(): void {
    this.findAll();
<<<<<<< HEAD
    this.estadoService.findAll().subscribe(e => this.estados = e);
=======
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
  }

  findAll() {
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
  }

  novo() {
    this.showDialog = true;
    this.cidadeEdit = new Cidade();
  }

  salvar() {
    this.cidadeService.save(this.cidadeEdit).subscribe(e => {
      this.cidadeEdit = new Cidade();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cidade: Cidade) {
    this.cidadeEdit = cidade;
    this.showDialog = true;
  }

  remover(cidade: Cidade) {
    this.cidadeService.delete(cidade.id).subscribe(() => {
      this.findAll();
    });
  }
}
