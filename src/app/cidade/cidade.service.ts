import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Cidade} from './cidade';
import {Estado} from '../estado/estado';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CidadeService extends CrudService<Cidade, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cidade', http);
  }
  
  findByEstado(estado: Estado):Observable<Cidade[]>{
	    const url = `${this.getUrl()}/findByEstado?id=${estado.id}`;
	    return this.http.get<Cidade[]>(url);
  }
}

