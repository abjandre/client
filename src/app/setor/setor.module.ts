import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SetorComponent} from './setor.component';
import {SetorService} from './setor.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DialogModule,
    GrowlModule,
    ConfirmDialogModule
  ],
  declarations: [
    SetorComponent
  ],
  providers: [
    SetorService,
    ConfirmationService
  ]
})
export class SetorModule {

}
