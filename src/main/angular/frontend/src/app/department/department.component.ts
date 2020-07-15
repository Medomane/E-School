import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentService} from "./department.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments ;
  constructor(public app: AppComponent ,private route: ActivatedRoute, private router: Router, public service:DepartmentService) {
    this.app.subTitle = 'Départements';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.getDepartments(params).subscribe(v =>{
        if (typeof v === 'string') {
          this.departments= JSON.parse(v)._embedded.departments;
        }
      });
    });
  }
}
