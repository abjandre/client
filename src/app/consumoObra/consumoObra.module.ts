import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ConsumoObraComponent} from './consumoObra.component';
import {ConsumoObraService} from './consumoObra.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, InputMaskModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {ObraService} from '../obra/obra.service';
import {LoginService} from '../login/login.service';
import {ItemNotaModule} from "../itemNota/itemNota.module";


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
    ConsumoObraComponent
  ],
  providers: [
    ConsumoObraService,
    ObraService,
    ItemNotaModule,
    LoginService,
    ConfirmationService
  ]
})
export class ConsumoObraModule {

}
