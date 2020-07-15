import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  university;
  constructor(public app: AppComponent , private router: Router, public service:HomeService) {
    this.app.subTitle = 'Accueil';
  }

  ngOnInit(): void {
    this.service.getUniversity().subscribe(v=>{
      if (typeof v === 'string') {
        let value = JSON.parse(v)._embedded.universities[0];
        value.id = value._links.self.href.split('/')[value._links.self.href.split('/').length - 1];
        this.university = value;
      }
    });
  }

  /*goToSub(link) {
    this.router.navigate([link]).then(r=>{
      for(let i=0;i<this.app.crumb.length;i++) this.app.crumb[i].selected = false;
      this.app.crumb.push({'link':'/home','name':this.university.name,'selected':true})
    })
  }*/
}
