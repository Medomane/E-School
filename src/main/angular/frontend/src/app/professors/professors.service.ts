import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getProfessors(){
    return this.http.get(this.path + 'professors?size=1000', this.info);
  }
  deleteProfessor(id) {
    return this.http.delete(this.path + 'professors/' + id, this.info);
  }
  saveProfessor(data, c= null) {
    if (data.password === '' && c) { data.password = c.password; }
    return this.http.post(this.path + 'professors', data, this.info);
  }
  isEditable(user){
    return user.role === 'user' || user.email === this.auth.getCurrentUser().email;
  }
}
