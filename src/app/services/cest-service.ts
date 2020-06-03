import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab_Cest } from './cest';


@Injectable()
export class CestService {
    baseUrl: string = 'https://kestoque-api.herokuapp.com/tabs_cest';

    constructor(private http: HttpClient) { }


      list() {
        return this.http.get<Tab_Cest[]>(this.baseUrl);
      }


      getById(id: number) {
        return this.http.get<Tab_Cest>(this.baseUrl + '/' + id);
      }

      createOrUpdate(cest: Tab_Cest) {
          if (cest.id != null){
             return this.http.put(this.baseUrl, cest);
          }
          else{
             return this.http.post(this.baseUrl, cest);
          }
      }



      delete(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
      }
    }
