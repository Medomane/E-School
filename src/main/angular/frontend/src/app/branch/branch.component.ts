import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {BranchService} from "./branch.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branches ;
  currentBranch;
  currentSem;
  constructor(public app: AppComponent ,private route: ActivatedRoute, private router: Router, public modalService: NgbModal, public service:BranchService) {
    this.app.subTitle = 'Branches';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.service.getBranches(params).subscribe(v =>{
        if (typeof v === 'string') {
          this.branches= JSON.parse(v)._embedded.branches;
        }
      });
    });
  }

  open(content, b) {
    this.currentBranch ={};
    let id = b._links.self.href.split('/')[b._links.self.href.split('/').length - 1];
    this.currentBranch = b;
    //branches/8/students
    this.service.get('branches/'+id+'/students').subscribe(v=>{
      if (typeof v === 'string') {
        this.currentBranch.students= JSON.parse(v)._embedded.students;
        this.modalService.open(content);
      }
    });
  }

  showSemesters(b) {
    this.currentBranch ={};
    let id = b._links.self.href.split('/')[b._links.self.href.split('/').length - 1];
    this.currentBranch = b;
    this.service.get('branches/'+id+'/semesters').subscribe(v=>{
      if (typeof v === 'string') {
        this.currentBranch.semesters = JSON.parse(v)._embedded.semesters;
      }
    });
  }

  showModules(sem,s) {
    this.currentSem = s ;
    let id = s._links.self.href.split('/')[s._links.self.href.split('/').length - 1];
    this.service.get('semesters/'+id+'/modules').subscribe(v=>{
      if (typeof v === 'string') {
        this.currentSem.modules= JSON.parse(v)._embedded.modules;
        this.modalService.open(sem);
      }
    });
    //semesters/'+id+'/modules
  }

  goToElement(m) {
    let id = m._links.self.href.split('/')[m._links.self.href.split('/').length - 1];
    this.router.navigate(['/elements/'+id]).then(r => console.log('navigate ' + r));
    this.modalService.dismissAll();
  }
}
