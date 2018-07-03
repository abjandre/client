import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CrudService} from '../generic/crud.service';
import {ConsumoObra} from './consumoObra';
import {Injectable} from '@angular/core';

@Injectable()
export class ConsumoObraService extends CrudService<ConsumoObra, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/consumoObra', http);
  }
}
