import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ElementService} from "./element.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  elements ;
  registerForm: FormGroup;
  submitted = false;
  message: string;
  currentElement;
  teaches;
  get f() { return this.registerForm.controls; }
  constructor(public app: AppComponent, private modalService: NgbModal ,private route: ActivatedRoute, private router: Router, public service:ElementService, private formBuilder: FormBuilder) {
    this.app.subTitle = 'Eléments';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.getElements(params).subscribe(v =>{
        if (typeof v === 'string') {
          this.elements= JSON.parse(v)._embedded.moduleElements;
        }
      });
    });
    this.registerForm = this.formBuilder.group({
      id: [''],
      duration: ['', Validators.required],
      percent: ['', Validators.required]
    });
  }


  async onSubmit() {
    this.message = null;
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    const obj = this.registerForm.value ;
    this.service.save(obj).subscribe(v=>{
      this.modalService.dismissAll();
      this.route.paramMap.subscribe(params => {
        this.service.getElements(params).subscribe(v =>{
          if (typeof v === 'string') {
            this.elements= JSON.parse(v)._embedded.moduleElements;
          }
        });
      });
    });
  }

  open(content, data) {
    data.id = data._links.self.href.split('/')[data._links.self.href.split('/').length - 1];
    //delete data._links;
    const keys = Object.keys(this.registerForm.controls);
    const c = this;
    keys.forEach(function(e, i){
      if(c.registerForm.controls[e]) {
        // @ts-ignore
        c.registerForm.controls[e].value = data[e];
      }
    });
    if (!this.service.auth.isAdmin()) { this.registerForm.disable(); }
    else { this.registerForm.enable(); }
    this.currentElement = data;
    this.modalService.open(content);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  getTeaches(content,e) {
    e.id = e._links.self.href.split('/')[e._links.self.href.split('/').length - 1];
    this.service.getTeaches(e).subscribe(v=>{
      if (typeof v === 'string') {
        this.teaches= JSON.parse(v);
        this.modalService.open(content);
      }
    });
  }
}
