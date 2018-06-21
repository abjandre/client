import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LocalComponent} from './local.component';
import {LocalService} from './local.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {EstadoService} from '../estado/estado.service';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {CidadeService} from '../cidade/cidade.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
	ConfirmDialogModule
  ],
  declarations: [
    LocalComponent
  ],
  providers: [
    LocalService,
    EstadoService,
	  LoginService,
    CidadeService,
	  ConfirmationService
  ]
})
export class LocalModule {

}
