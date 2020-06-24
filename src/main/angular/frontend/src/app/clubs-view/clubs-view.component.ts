import {Component, OnInit} from '@angular/core';
import {ClubsService} from "../clubs/clubs.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-clubs-view',
  templateUrl: './clubs-view.component.html',
  styleUrls: ['./clubs-view.component.css']
})
export class ClubsViewComponent implements OnInit {

  clubs ;
  currentClub;

  constructor(public service: ClubsService, public auth: AuthService, private router: Router, public app: AppComponent, public modalService: NgbModal, private formBuilder: FormBuilder) {
    this.app.subTitle = 'Clubs';
  }

  ngOnInit(): void {
    this.update();
  }

  open(content,c) {
    this.currentClub = c;
    this.modalService.open(content);
  }

  adhere() {
    this.service.adhere(this.currentClub).subscribe(v=>{
      if (typeof v === "string") {
        this.update();
      }
    });
  }

  quite() {
    Swal.fire({
      title: 'Confirmation' ,
      text: 'Voulez-vous vraiment quitter ce club ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      if (result.value) {
        this.service.quite(this.currentClub).subscribe(v=>{
          this.update();
        });
      }
    });
  }
  update(){
    this.service.getClubs().subscribe(v=>{
      if (typeof v === 'string') {
        this.clubs = JSON.parse(v);
        if(this.currentClub){
          this.currentClub = this.clubs.filter(v => v.id === this.currentClub.id)[0];
        }
      }
    });
  }
}
