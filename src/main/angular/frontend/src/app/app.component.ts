import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SlideInOutAnimation} from './animations';
import {AuthService} from './auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'frontend';
  isToggled = false;
  path = 'http://localhost:8082/';
  animationState = [];
  subTitle;
  constructor(public router: Router, public auth: AuthService) {
    if (!auth.isAuthenticated()) { this.router.navigate(['/login']).then(r => console.log('navigate ' + r)); }
    if (!auth.isPermitted()) { this.router.navigate(['/home']).then(r => Swal.fire(
      'Information',
      'Vous n\'avez pas l\'autorisation !!',
      'warning'
    ));
    }
    this.isToggled = auth.isAuthenticated();
    for (let i = 0; i < 10; i++) { this.animationState[i] = 'out'; }
  }
  toggleShowDiv(index) {
    this.animationState[index] = this.animationState[index] === 'out' ? 'in' : 'out';
    return false;
  }

  logout() {
    this.isToggled = false;
    this.auth.logout();
  }
}
