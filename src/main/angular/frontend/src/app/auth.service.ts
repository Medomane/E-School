import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout() {
    localStorage.removeItem('user');
  }
  getCurrentUser(){
    return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
  }
  isAuthenticated(){
    return localStorage.getItem('user') != null;
  }
  isAdmin(){
    return this.getCurrentUser().role === 'admin';
  }
  isPermitted(){
    if(location.pathname.startsWith('/admin/')) return this.isAuthenticated() && this.isAdmin();
    return true ;
  }
}
