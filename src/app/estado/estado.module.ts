import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
<<<<<<< HEAD
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {EstadoService} from '../estado/estado.service';
import {EstadoComponent} from './estado.component';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { GrowlModule } from 'primeng/components/growl/growl';
=======
import {EstadoComponent} from './estado.component';
import {EstadoService} from './estado.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
<<<<<<< HEAD
    ConfirmDialogModule,
    GrowlModule
=======
	ConfirmDialogModule,
	GrowlModule
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
  ],
  declarations: [
    EstadoComponent
  ],
  providers: [
    EstadoService,
<<<<<<< HEAD
    ConfirmationService,
    LoginService
=======
	ConfirmationService,
	LoginService
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
  ]
})
export class EstadoModule {

}
<<<<<<< HEAD

=======
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
