import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {EstadoService} from '../estado/estado.service';
import {EstadoComponent} from './estado.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    EstadoComponent
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule {

}

