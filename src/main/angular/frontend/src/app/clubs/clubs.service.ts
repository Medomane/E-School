import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  path = 'http://localhost:8082/';
  info = {};
  constructor(private http: HttpClient, private auth: AuthService) {
    const user = auth.getCurrentUser();
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.email + ':' + user.password) });
    this.info = {headers, responseType: 'text' as 'json'};
  }
  getClubs(){
    return this.http.get(this.path + 'getClubs', this.info);
  }
  deleteClub(id) {
    return this.http.delete(this.path + 'clubs/' + id, this.info);
  }
  upload(file){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', file, file.name);
    const tmp = this.info;
    // @ts-ignore
    tmp.observe = 'response';
    return this.http.post(this.path + 'image/upload', uploadImageData, tmp);
  }
  saveClub(data) {
    return this.http.post(this.path + 'clubs', data, this.info);
  }
  isEditable(club){
    if(!club.adheres) return true;
    if(this.auth.isAdmin()) return true;
    const a = club.adheres.filter(v => v.student.id === this.auth.getCurrentUser().id);
    if (a.length > 0) { return a[0].role === 'president' || a[0].role === 'vicePresident'; }
    return false;
  }
  isMember(club){
    const a = club.adheres.filter(v => v.student.id === this.auth.getCurrentUser().id);
    return (a && a.length > 0);
  }

  adhere(club) {
    let adhere = {
      date : new Date(),
      role:"member",
      student:{
        id:this.auth.getCurrentUser().id
      },
      club:{
        id:club.id
      }
    }
    return this.http.post(this.path+'adhere',adhere,this.info);
  }

  quite(club) {
    const adhere = club.adheres.filter(v => v.student.id === this.auth.getCurrentUser().id)[0];
    return this.http.delete(this.path+'adheres/'+adhere.id,this.info);
  }
}
