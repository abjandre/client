import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DevolucaoComponent} from './devolucao.component';
import {DevolucaoService} from './devolucao.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, InputMaskModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {LoginService} from '../login/login.service';
import {ConsumoObraService} from '../consumoObra/consumoObra.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    GrowlModule,

  ],
  declarations: [
    DevolucaoComponent
  ],
  providers: [
    DevolucaoService,
    ConsumoObraService,
    LoginService,
    ConfirmationService
  ]
})
export class DevolucaoModule {

}
