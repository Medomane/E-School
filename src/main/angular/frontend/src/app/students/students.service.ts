import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getStudents(){
    return this.http.get(this.path + 'students?size=1000', this.info);
  }
  deleteStudent(id) {
    return this.http.delete(this.path + 'students/' + id, this.info);
  }
  saveStudent(data, c= null) {
    if (data.password === '' && c) { data.password = c.password; }
    return this.http.post(this.path + 'students', data, this.info);
  }
  isEditable(user){
    return user.role === 'user' || user.email === this.auth.getCurrentUser().email;
  }
}
