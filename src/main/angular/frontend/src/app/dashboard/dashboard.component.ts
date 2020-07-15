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

  constructor(private clubs:ClubsService,public service:DashboardService,public app:AppComponent) { }

  ngOnInit(): void {
    this.app.subTitle = 'Tableau de bord';
    this.clubs.getClubs().subscribe(v=>{
      if (typeof v === 'string') {
        let res = JSON.parse(v);
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
    });
    this.service.getBranches().subscribe(v=>{
      if (typeof v === 'string') {
        let res = JSON.parse(v)._embedded.branches;
        let t = this;
        let dataPoints = [];
        res.forEach(function(e,i){
          t.service.getStudents(e).subscribe(v=>{
            if (typeof v === 'string') {
              e.students = JSON.parse(v)._embedded.students;
              dataPoints.push({y:e.students.length,name:e.name.split('-')[0]+(e.name.split('-')[1].length<=6?e.name.split('-')[1]:'')});
            }
          });
        });
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
    });



    this.service.getProfessors().subscribe(v=>{
      if (typeof v === 'string') {
        let res = JSON.parse(v)._embedded.professors;
        let t = this;
        let dataPoints = [];
        res.forEach(function(e,i){
          t.service.getTeaches(e).subscribe(v=>{
            if (typeof v === 'string') {
              e.teaches = JSON.parse(v)._embedded.teaches;
              dataPoints.push({y:e.teaches.length,label:e.firstName});
            }
          });
        });
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
    });
  }

}
