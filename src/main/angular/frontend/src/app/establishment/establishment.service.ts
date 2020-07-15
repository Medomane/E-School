import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getEstablishments(info=null){
    if(info && info["params"] && !isNaN(info["params"].id)) return this.http.get(this.path+'universities/'+info["params"].id+'/establishments',this.info);
    else return this.http.get(this.path+'establishments',this.info);
  }
}
