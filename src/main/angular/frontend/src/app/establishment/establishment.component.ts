import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {EstablishmentService} from "./establishment.service";

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  establishments ;
  constructor(public app: AppComponent ,private route: ActivatedRoute, private router: Router, public service:EstablishmentService) {
    this.app.subTitle = 'Etablissements';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.getEstablishments(params).subscribe(v =>{
        if (typeof v === 'string') {
          this.establishments= JSON.parse(v)._embedded.establishments;
        }
      });
    });
  }

}
