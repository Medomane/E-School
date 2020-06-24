import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MustMatch} from '../_helpers/must-match.validator';
import Swal from 'sweetalert2';
import {ProfessorsService} from './professors.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  registerForm: FormGroup;
  @ViewChild('content') content: any;
  submitted = false;
  isEditing = false;
  paginationNumberFormatter;
  paginationPageSize;
  columnDefs;
  rowData;
  private gridApi;
  private gridColumnApi;
  currentUser = {};
  message: string;
  // tslint:disable-next-line:max-line-length
  constructor(public service: ProfessorsService, public auth: AuthService, private router: Router, public app: AppComponent, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.app.subTitle = 'Liste des professeurs';
    this.columnDefs = [
      {field: 'lastName', displayName: 'Nom' },
      {field: 'firstName', displayName: 'Prénom' },
      {field: 'email', displayName: 'Email' },
      {field: 'cin', displayName: 'CIN' },
      {field: 'status', displayName: 'Statut' },
      {displayName: 'Actions' , width: 100,
        cellRenderer: (data) => {
          const id = data.data._links.self.href.split('/')[data.data._links.self.href.split('/').length - 1];
          data.data.id = id;
          const eDiv = document.createElement('div');
          eDiv.setAttribute('style', 'width:100%;text-align:center;');

          const currentComponent = this;
          eDiv.innerHTML = `
                  <div class="btn btn-info" style="padding:0 7px !important;font-size: 12px !important;vertical-align: baseline !important;">
                      <i class="fas fa-info fa-xs" title="Détail"></i>
                  </div>`;
          if (this.service.isEditable(data.data)) {
            eDiv.innerHTML += `
                  <div class="btn btn-danger" style="padding: 0 5px !important;font-size: 12px !important;vertical-align: baseline !important;">
                      <i class="far fa-trash-alt fa-xs" title="Supprimer"></i>
                  </div>`;
            const deleteBtn = eDiv.querySelectorAll('.btn-danger')[0];
            deleteBtn.addEventListener('click', function(evt) {
              currentComponent.onDeletePerson(id);
            });
          }
          const editBtn = eDiv.querySelectorAll('.btn-info')[0];
          editBtn.addEventListener('click', function() {
            currentComponent.onEditPerson(data.data);
          });
          return eDiv;
        }
      }
    ];
    this.rowData = [];
    this.paginationPageSize = 15;
    this.paginationNumberFormatter = function(params) {
      return '<b>' + params.value.toLocaleString() + '</b>';
    };
  }

  ngOnInit(): void {
    this.setValidators();
  }

  private setValidators() {
    const passwordValidators = [
      Validators.maxLength(250),
      Validators.minLength(6)
    ];
    if (this.isEditing && passwordValidators.length >= 3) { passwordValidators.pop(); }
    if (!this.isEditing && passwordValidators.length < 3) { passwordValidators.push(Validators.required); }
    this.registerForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      status: ['', Validators.required],
      apogee: [''],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      information: [''],
      password: ['', passwordValidators],
      confirmPassword: [''],
      role: ['', Validators.required],
      cin: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onDeletePerson(id){
    Swal.fire({
      title: 'Confirmation' ,
      text: 'Voulez-vous vraiment supprimer cet utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteProfessor(id).subscribe(v => {
          this.refreshGV();
        }, error => { console.error(error) ; });
      }
    });
  }

  onEditPerson(data){
    this.submitted = false;
    this.isEditing = true;
    this.setValidators();
    const keys = Object.keys(this.registerForm.controls);
    const c = this;
    keys.forEach(function(e, i){
      // @ts-ignore
      if (e !== 'password' && e !== 'confirmPassword') { c.registerForm.controls[e].value = data[e]; }
    });
    if (!this.service.isEditable(data) && this.isEditing) { this.registerForm.disable(); }
    else { this.registerForm.enable(); }
    this.currentUser = data;
    this.modalService.open(this.content);
  }

  onPageSizeChanged() {
    const value = document.getElementById('page-size')['value'];
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.service.getProfessors().subscribe(v => {
      if (typeof v === 'string') {
        const value = JSON.parse(v);
        this.rowData = value._embedded.professors;
        this.gridApi.sizeColumnsToFit();
      }
    }, error => { console.error(error) ; });
  }

  open(content) {
    this.submitted = false;
    this.isEditing = false;
    this.setValidators();
    this.currentUser = {};
    // @ts-ignore
    this.registerForm.controls.id['value'] = 0;
    this.modalService.open(content);
  }

  onSubmit() {
    this.message = null;
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    this.service.saveProfessor(this.registerForm.value, this.currentUser).subscribe(v1 => {
      if (typeof v1 === "string") {
        let tv1 = JSON.parse(v1);
        if( tv1.id === this.auth.getCurrentUser().id) {
          this.auth.logout();
          this.router.navigate(['/login']).then(r => console.log('navigate ' + r));
        }
      }
      this.service.getProfessors().subscribe(v => {
        if (typeof v === 'string') {
          const value = JSON.parse(v);
          this.rowData = value._embedded.professors;
          this.gridApi.sizeColumnsToFit();
        }
        this.modalService.dismissAll();
      }, error => { console.error(error) ; this.message = 'Un erreur s\'est produite lors de l\'envoi !!!'; });
    }, error => { console.error(error) ; this.message = 'Un erreur s\'est produite lors de l\'envoi !!!'; });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  refreshGV(){
    this.service.getProfessors().subscribe(v => {
      if (typeof v === 'string') {
        const value = JSON.parse(v);
        this.rowData = value._embedded.professors;
      }
    }, error => { console.error(error) ; });
  }
}
