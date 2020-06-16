import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public app: AppComponent ,private router: Router) { }

  ngOnInit(): void {
  }

}
