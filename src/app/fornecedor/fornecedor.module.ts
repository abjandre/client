import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FornecedorComponent} from './fornecedor.component';
import {FornecedorService} from './fornecedor.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {DropdownModule, CheckboxModule, InputMaskModule} from 'primeng/primeng';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
	InputMaskModule,
	ConfirmDialogModule,
	GrowlModule
  ],
  declarations: [
    FornecedorComponent
  ],
  providers: [
    FornecedorService,
    CidadeService,
    EstadoService,
	LoginService,
	ConfirmationService
  ]
})
export class FornecedorModule {

}