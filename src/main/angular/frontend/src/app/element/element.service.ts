import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, public auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getElements(info=null){
    if(info && info["params"] && !isNaN(info["params"].id)) return this.http.get(this.path+'modules/'+info["params"].id+'/moduleElements',this.info);
    else return this.http.get(this.path+'moduleElements',this.info);
  }

  save(data) {
    return this.http.post(this.path+"moduleElement",data, this.info);
  }

  getTeaches(e) {
    return this.http.get(this.path+"getTeaches/"+e.id,this.info);
  }
}
