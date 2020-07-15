import {Component, OnInit} from '@angular/core';
import * as CanvasJS from '../../assets/canvas.js';
import {ClubsService} from "../clubs/clubs.service";
import {DashboardService} from "./dashboard.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isError = false;
  constructor(private clubs:ClubsService,public service:DashboardService,public app:AppComponent) { }

  ngOnInit(): void {
    //this.app.subTitle = 'Tableau de bord';
    this.loadData();
  }
  loadData(){
    try {
      this.getClubs().then(r => console.log(r));
      this.getBranches().then(r => console.log(r));
      this.getProfs().then(r => console.log(r));
    }catch (e) {
      this.isError = true;
      console.log(e);
    }
  }
  async getClubs(){
    let clubData = await this.clubs.getClubs().toPromise();
    if (typeof clubData === 'string') {
      let res = JSON.parse(clubData);
      let dataPoints = [];
      res.forEach(function(e,i){
        dataPoints.push({y:e.adheres.length,label:e.name});
      });
      let chart = new CanvasJS.Chart("chartContainerClubs", {
        animationEnabled: true,
        exportEnabled: false,
        title: {
          text: "Membres par club "
        },
        data: [{
          type: "column",
          dataPoints: dataPoints
        }]
      });
      chart.render();
    }
  }
  async getBranches(){
    let branchesData = await this.service.getBranches().toPromise();
    if (typeof branchesData === 'string') {
      let res = <any[]>JSON.parse(branchesData)._embedded.branches;
      let t = this;
      let dataPoints = [];
      for (const e of res) {
        let tmp = await t.service.getStudents(e).toPromise();
        if (typeof tmp === 'string') {
          e.students = JSON.parse(tmp)._embedded.students;
          dataPoints.push({y:e.students.length,name:e.name.split('-')[0]+(e.name.split('-')[1].length<=6?e.name.split('-')[1]:'')});
        }
      }
      let chart = new CanvasJS.Chart("chartContainerStudents", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Etudiants par filières"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: dataPoints
        }]
      });
      chart.render();
    }
  }
  async getProfs(){
    let professorsData = await this.service.getProfessors().toPromise();
    if (typeof professorsData === 'string') {
      let res = JSON.parse(professorsData)._embedded.professors;
      let t = this;
      let dataPoints = [];
      for (const e of res) {
        let tmp = await t.service.getTeaches(e).toPromise();
        if (typeof tmp === 'string') {
          e.teaches = JSON.parse(tmp)._embedded.teaches;
          dataPoints.push({y:e.teaches.length,label:e.firstName});
        }
      }
      let chart = new CanvasJS.Chart("chartContainerTeaches", {
        animationEnabled: true,
        title:{
          text: "Modules par professeurs"
        },
        axisY:{
          title: "Nombre",
          interval: 10
        },
        toolTip: {
          shared: true
        },
        data: [{
          type: "bar",
          name: "Nombre d'élements de modules",
          toolTipContent: "<b>{label}</b> <br> <span style=\"color:#4F81BC\">{name}</span>: {y}",
          dataPoints: dataPoints
        }]
      });
      chart.render();
    }
  }
}
