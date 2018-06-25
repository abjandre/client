import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
<<<<<<< HEAD
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Estado} from '../estado/estado';
import {Observable} from 'rxjs/Observable';


=======
import {Estado} from './estado';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f

@Injectable()
export class EstadoService extends CrudService<Estado, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/estado', http);
  }
}
<<<<<<< HEAD

=======
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
