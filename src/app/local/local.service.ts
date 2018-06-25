import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Local} from './local';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class LocalService extends CrudService<Local, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/local', http);
  }
}
