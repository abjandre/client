import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FuncionarioComponent} from './funcionario.component';
import {FuncionarioService} from './funcionario.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule, Dropdown} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {GrowlModule} from 'primeng/growl';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    InputMaskModule,
    GrowlModule,
    ConfirmDialogModule
  ],
  declarations: [
    FuncionarioComponent
  ],
  providers: [
    FuncionarioService,
    ConfirmationService
  ]
})
export class FuncionarioModule {

}
