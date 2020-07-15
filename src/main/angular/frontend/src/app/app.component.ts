import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SlideInOutAnimation} from './animations';
import {AuthService} from './auth.service';
import Swal from 'sweetalert2';
import {AppService} from "./app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'frontend';
  isToggled = false;
  animationState = [];
  subTitle;
  crumb = [];
  constructor(public router: Router,private route: ActivatedRoute, public auth: AuthService,public service:AppService) {
    if (!auth.isAuthenticated()) { this.router.navigate(['/login']).then(r => console.log('navigate ' + r)); }
    if (!auth.isPermitted()) { this.router.navigate(['/home']).then(r => Swal.fire(
        'Information',
        'Vous n\'avez pas l\'autorisation !!',
        'warning'
      )
    );
    }
    this.isToggled = auth.isAuthenticated();
    for (let i = 0; i < 10; i++) { this.animationState[i] = 'out'; }
    router.events.subscribe((val) => {
      this.crumb = [];
      if(val["snapshot"]){
        if(val["snapshot"].params){
          if(val["snapshot"].params.id) {
            this.getObject(val["snapshot"].params.id).subscribe(v=>{
              if (typeof v === 'string') {
                if(this.crumb.length <= 0){
                  let value = JSON.parse(v);
                  //console.log(value);
                  if(value.university){
                    this.crumb.push({'link':'/home','name':value.university.name});
                    this.crumb.push({'link':'/establishments/'+value.university.id,'name':value.name});
                  }
                  else if(value.establishment){
                    this.crumb.push({'link':'/home','name':value.establishment.university.name});
                    this.crumb.push({'link':'/establishments/'+value.establishment.university.id,'name':value.establishment.name});
                    this.crumb.push({'link':'/departments/'+value.establishment.id,'name':value.name});
                  }
                  else if(value.department){
                    this.crumb.push({'link':'/home','name':value.department.establishment.university.name});
                    this.crumb.push({'link':'/establishments/'+value.department.establishment.university.id,'name':value.department.establishment.name});
                    this.crumb.push({'link':'/departments/'+value.department.establishment.id,'name':value.department.name});
                    this.crumb.push({'link':'/branches/'+value.department.id,'name':value.name});
                  }
                  else if(value.semester){
                    this.crumb.push({'link':'/home','name':value.semester.branch.department.establishment.university.name});
                    this.crumb.push({'link':'/establishments/'+value.semester.branch.department.establishment.university.id,'name':value.semester.branch.department.establishment.name});
                    this.crumb.push({'link':'/departments/'+value.semester.branch.department.establishment.id,'name':value.semester.branch.department.name});
                    this.crumb.push({'link':'/branches/'+value.semester.branch.department.id,'name':value.name});
                  }
                  else{
                    this.crumb.push({'link':'/home','name':value.name});
                  }
                }
              }
            });
            if(this.crumb && this.crumb.length > 0){
            }
          }
        }
      }
    });
  }
  toggleShowDiv(index) {
    this.animationState[index] = this.animationState[index] === 'out' ? 'in' : 'out';
    return false;
  }

  logout() {
    this.isToggled = false;
    this.auth.logout();
  }
  getObject(id){
    return this.service.getObject(id);
  }
}
