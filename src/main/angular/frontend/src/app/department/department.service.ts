import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getDepartments(info=null){
    if(info && info["params"] && !isNaN(info["params"].id)) return this.http.get(this.path+'establishments/'+info["params"].id+'/departments',this.info);
    else return this.http.get(this.path+'departments',this.info);
  }
}
