import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
<<<<<<< HEAD
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CidadeComponent} from './cidade.component';
import {CidadeService} from './cidade.service';
import {DropdownModule} from 'primeng/primeng';
import {EstadoService} from '../estado/estado.service';
=======
import {CidadeComponent} from './cidade.component';
import {CidadeService} from './cidade.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
<<<<<<< HEAD
    DialogModule,
    DropdownModule
=======
    DialogModule
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
  ],
  declarations: [
    CidadeComponent
  ],
  providers: [
<<<<<<< HEAD
    CidadeService,
    EstadoService
=======
    CidadeService
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
  ]
})
export class CidadeModule {

}
<<<<<<< HEAD

=======
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
