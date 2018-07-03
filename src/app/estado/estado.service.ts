import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Estado} from '../estado/estado';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class EstadoService extends CrudService<Estado, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/estado', http);
  }
}
