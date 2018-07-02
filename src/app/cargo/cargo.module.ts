import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CargoComponent} from './cargo.component';
import {CargoService} from './cargo.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    GrowlModule,
    ConfirmDialogModule
  ],
  declarations: [
    CargoComponent
  ],
  providers: [
    CargoService,
    ConfirmationService
  ]
})
export class CargoModule {

}
