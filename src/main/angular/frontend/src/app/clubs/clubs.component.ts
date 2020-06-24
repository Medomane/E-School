import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import {ClubsService} from './clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

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
  currentClub = {};
  message: string;
  // tslint:disable-next-line:max-line-length
  private selectedFile;
  constructor(public service: ClubsService, public auth: AuthService, private router: Router, public app: AppComponent, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.app.subTitle = 'Liste des clubs';
    this.columnDefs = [
      {field: 'name', displayName: 'Nom' , width: 100},
      {field: 'information', displayName: 'Information' },
      {displayName: 'Actions' , width: 40,
        cellRenderer: (data) => {
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
              currentComponent.onDeleteClub(data.data.id);
            });
          }
          const editBtn = eDiv.querySelectorAll('.btn-info')[0];
          editBtn.addEventListener('click', function() {
            currentComponent.onEditClub(data.data);
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
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      information: [''],
      icon: [''],
      link: ['']
    });
  }

  get f() { return this.registerForm.controls; }

  onDeleteClub(id){
    Swal.fire({
      title: 'Confirmation' ,
      text: 'Voulez-vous vraiment supprimer ce club ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteClub(id).subscribe(v => {
          this.refreshGV();
        }, error => { console.error(error) ; });
      }
    });
  }

  onEditClub(data){
    this.submitted = false;
    this.isEditing = true;
    const keys = Object.keys(this.registerForm.controls);
    const c = this;
    keys.forEach(function(e, i){
      // @ts-ignore
      if (e !== 'icon') { c.registerForm.controls[e].value = data[e]; }
    });
    if (!this.service.isEditable(data) && this.isEditing) { this.registerForm.disable(); }
    else { this.registerForm.enable(); }
    this.currentClub = data;
    this.modalService.open(this.content);
  }

  onPageSizeChanged() {
    // @ts-ignore
    const value = document.getElementById('page-size').value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.service.getClubs().subscribe(v => {
      if (typeof v === 'string') {
        const value = JSON.parse(v);
        this.rowData = value;
        this.gridApi.sizeColumnsToFit();
      }
    }, error => { console.error(error) ; });
  }

  open(content) {
    this.submitted = false;
    this.isEditing = false;
    this.currentClub = {};
    // @ts-ignore
    this.registerForm.controls.id.value = 0;
    this.modalService.open(content);
  }

  async onSubmit() {
    this.message = null;
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    const obj = this.registerForm.value ;
    // @ts-ignore
    obj.icon = this.selectedFile ? this.selectedFile.name : this.currentClub.adheres ? this.currentClub.icon : '';
    const s = this.selectedFile;
    this.selectedFile = null;
    if (s) {
      const res = await this.service.upload(s).toPromise();
      // @ts-ignore
      if (!res.body) this.message = "Erreur !!!";
    }
    if(this.message && this.message.trim() != '') return ;
    this.service.saveClub(obj).subscribe(v1 => {
      this.refreshGV();
      this.modalService.dismissAll();
    }, error => { console.error(error) ; this.message = 'Un erreur s\'est produite lors de l\'envoi !!!'; });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  refreshGV(){
    this.service.getClubs().subscribe(v => {
      if (typeof v === 'string') {
        this.rowData = JSON.parse(v);
      }
    }, error => { console.error(error) ; });
  }

  onFileChanged(event: Event) {
    try{
      // @ts-ignore
      this.selectedFile = event.target.files[0];
      if (this.selectedFile && this.selectedFile.type.indexOf('image') === -1) {
        this.selectedFile = null;
        this.message = 'Vous devez choisir une image !!';
      }
    }
    catch (e){
      this.message = e.message;
      this.selectedFile = null;
    }
  }
}
