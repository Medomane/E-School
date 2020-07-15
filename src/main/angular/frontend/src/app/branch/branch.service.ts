import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getBranches(info=null){
    if(info && info["params"] && !isNaN(info["params"].id)) return this.http.get(this.path+'departments/'+info["params"].id+'/branches',this.info);
    else return this.http.get(this.path+'branches',this.info);
  }

  get(path) {
    return this.http.get(this.path+path,this.info)
  }
}
