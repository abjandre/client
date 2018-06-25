import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
<<<<<<< HEAD
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Cidade} from './cidade';
import {Estado} from '../estado/estado';
import {Observable} from 'rxjs/Observable';
=======
import {Cidade} from './cidade';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f

@Injectable()
export class CidadeService extends CrudService<Cidade, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cidade', http);
  }
<<<<<<< HEAD
  
  findByEstado(estado: Estado):Observable<Cidade[]>{
	    const url = `${this.getUrl()}/findByEstado?id=${estado.id}`;
	    return this.http.get<Cidade[]>(url);
  }
}

=======
}
>>>>>>> 73adbb7faa9f9bd41dd0a89c6d29679a9fb2557f
