import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CrudService} from '../generic/crud.service';
import {Devolucao} from './devolucao';
import {Injectable} from '@angular/core';

@Injectable()
export class DevolucaoService extends CrudService<Devolucao, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/devolucao', http);
  }
}
